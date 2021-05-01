function parser(response) {
  const summary = response.data[0]['summary'];

  const title   = summary['title'];
  const authors = summary['author'];
  const imgUrl  = summary['cover'];

  return {title, authors, imgUrl};
}

export default parser;