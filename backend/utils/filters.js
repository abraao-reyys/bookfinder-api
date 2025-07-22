export function filters(data, idiom, available, year) {
  const byAvailable = matchAvailable(data.docs, available);
  const byIdiom = matchIdiom(byAvailable, idiom);
  const byYear = matchYear(byIdiom, year);
  return byYear;
}

function matchAvailable(data, available) {
  if (available == 'true') {
    return data.filter((book) => book.ebook_access === "borrowable");
  } else if (available == 'false') {
    return data.filter((book) => book.ebook_access !== "borrowable");
  } else {
    return data;
  }
}

function matchIdiom(data, idiom) {
  if (idiom) {
    return data.filter(
      (book) => Array.isArray(book.language) && book.language.includes(idiom)
    );
  } else {
    return data;
  }
}

function matchYear(data, year) {
  if (year) {
    return data.filter((book) => book.first_publish_year >= year);
  } else {
    return data;
  }
}
