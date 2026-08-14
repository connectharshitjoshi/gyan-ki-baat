// Gyaan Ki Baat - Main Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  initSearchAndFilter();
  initCopyCodeButtons();
  initCardClickHandlers();
});

// Clickable Entire Card Handler
function initCardClickHandlers() {
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach(card => {
    const link = card.querySelector('a');
    if (link && link.getAttribute('href') && link.getAttribute('href') !== '#') {
      card.addEventListener('click', (e) => {
        // Prevent duplicate trigger if user clicked directly on the anchor element
        if (e.target.tagName !== 'A' && !e.target.closest('a')) {
          window.location.href = link.href;
        }
      });
    }
  });
}

// Search, Tag Filtering & "View All Articles" Logic
function initSearchAndFilter() {
  const searchInput = document.getElementById('search-input');
  const tagPills = document.querySelectorAll('.tag-pill');
  const postCards = document.querySelectorAll('.post-card');
  const loadMoreContainer = document.getElementById('load-more-container');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const loadMoreText = document.getElementById('load-more-text');

  if (!postCards.length) return;

  const INITIAL_LIMIT = 6;
  const totalPosts = postCards.length;
  let isExpanded = false;
  let activeTag = 'all';
  let searchQuery = '';

  function filterPosts() {
    let matchingIndex = 0;
    const isFiltered = activeTag !== 'all' || searchQuery !== '';

    postCards.forEach((card) => {
      const title = card.querySelector('.post-title').textContent.toLowerCase();
      const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();
      const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';
      const tags = card.dataset.tags ? card.dataset.tags.toLowerCase() : '';

      const matchesSearch = title.includes(searchQuery) || excerpt.includes(searchQuery);
      const matchesTag = activeTag === 'all' || category === activeTag || tags.includes(activeTag);

      if (matchesSearch && matchesTag) {
        // If user is searching or filtering by category, show all matches.
        // If viewing default "All Posts", respect the 6-post initial limit unless expanded.
        if (isFiltered || isExpanded || matchingIndex < INITIAL_LIMIT) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
        matchingIndex++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update Load More Button visibility and text
    if (loadMoreContainer && loadMoreBtn) {
      if (isFiltered || matchingIndex <= INITIAL_LIMIT) {
        loadMoreContainer.style.display = 'none';
      } else {
        loadMoreContainer.style.display = 'flex';
        if (isExpanded) {
          loadMoreBtn.classList.add('expanded');
          if (loadMoreText) loadMoreText.textContent = 'Show Less';
        } else {
          loadMoreBtn.classList.remove('expanded');
          if (loadMoreText) loadMoreText.textContent = `View All Articles (${totalPosts})`;
        }
      }
    }
  }

  // Handle Load More / View All click
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      filterPosts();

      // Smooth scroll if collapsing back to top of articles
      if (!isExpanded) {
        const articlesSection = document.getElementById('articles');
        if (articlesSection) {
          articlesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // Handle live search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterPosts();
    });
  }

  // Handle category tags
  tagPills.forEach(pill => {
    pill.addEventListener('click', () => {
      tagPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeTag = pill.dataset.tag.toLowerCase();
      filterPosts();
    });
  });

  // Initial render: show first 6 posts
  filterPosts();
}

// Copy Code Snippets
function initCopyCodeButtons() {
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach(pre => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerText = 'Copy';
    button.style.position = 'absolute';
    button.style.right = '10px';
    button.style.top = '10px';
    button.style.background = 'rgba(255,255,255,0.1)';
    button.style.border = 'none';
    button.style.color = '#fff';
    button.style.padding = '4px 8px';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '0.75rem';

    pre.style.position = 'relative';
    pre.appendChild(button);

    button.addEventListener('click', () => {
      const codeText = pre.querySelector('code')?.innerText || pre.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        button.innerText = 'Copied!';
        button.style.background = '#10b981';
        setTimeout(() => {
          button.innerText = 'Copy';
          button.style.background = 'rgba(255,255,255,0.1)';
        }, 2000);
      });
    });
  });
}
