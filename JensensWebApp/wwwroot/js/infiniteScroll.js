document.addEventListener("DOMContentLoaded", function () {
  const articles = Array.from(document.querySelectorAll(".article-card"));
  const loading = document.getElementById("loading");
  const itemsPerPage = 10;
  let currentPage = 0;
  let isLoading = false;
  let allArticlesLoaded = false;

  function loadArticles() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    if (start >= articles.length) {
      allArticlesLoaded = true;
      loading.style.display = "none";
      return;
    }

    for (let i = start; i < end && i < articles.length; i++) {
      articles[i].style.display = "block";
    }

    loading.style.display = "block";
  }

  function onScroll() {
    if (allArticlesLoaded) {
      return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 100) {
      if (!isLoading) {
        isLoading = true;
        loadArticles();
        currentPage++;
        setTimeout(() => {
          isLoading = false;
        }, 1500); // fördröjning
      }
    }
  }

  // första gången
  loadArticles();

  // inf-scroll
  window.addEventListener("scroll", onScroll);

  onScroll();
});
