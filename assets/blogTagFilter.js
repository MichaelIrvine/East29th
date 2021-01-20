(function () {
  const filter = document.getElementById('BlogTagFilter');

  filter.addEventListener('change', function () {
    document.location.href = filter.value;
  });
})();
