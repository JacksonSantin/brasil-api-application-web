class Isbn {
  constructor({
    isbn = "",
    title = "",
    subtitle = "",
    authors = [],
    publisher = "",
    synopsis = "",
    dimensions = {},
    year = 0,
    format = "",
    page_count = 0,
    subjects = {},
    location = "",
    retail_price = null,
    cover_url = "",
    provider = "",
  }) {
    this.isbn = isbn
    this.title = title
    this.subtitle = subtitle
    this.authors = authors
    this.publisher = publisher
    this.synopsis = synopsis
    this.dimensions = dimensions
    this.year = year
    this.format = format
    this.page_count = page_count
    this.subjects = subjects
    this.location = location
    this.retail_price = retail_price
    this.cover_url = cover_url
    this.provider = provider
  }
}

export { Isbn }