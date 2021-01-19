const blogTagFilter = () => {
  const filter = document.getElementById('BlogTagFilter');

  filter.addEventListener('change', function () {
    document.location.href = filter.value;
  });
};

export default blogTagFilter;
