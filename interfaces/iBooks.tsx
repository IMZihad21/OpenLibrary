export interface iBooks {
    "key": string,
    "type": string,
    "seed": Array<string>,
    "title": string,
    "title_suggest": string,
    "has_fulltext": boolean,
    "edition_count": number,
    "edition_key": Array<string>,
    "publish_date": Array<string>,
    "publish_year": Array<number>,
    "first_publish_year": number,
    "number_of_pages_median": number,
    "lccn": Array<string>,
    "publish_place": Array<string>,
    "oclc": Array<string>,
    "contributor": Array<string>,
    "lcc": Array<string>,
    "ddc": Array<string>,
    "isbn": Array<string>,
    "last_modified_i": number,
    "ebook_count_i": number,
    "ia": Array<string>,
    "public_scan_b": boolean,
    "ia_collection_s": string,
    "lending_edition_s": string,
    "lending_identifier_s": string,
    "printdisabled_s": string,
    "cover_edition_key": string,
    "cover_i": number,
    "publisher": Array<string>,
    "language": Array<string>,
    "author_key": Array<string>,
    "author_name": Array<string>,
    "author_alternative_name": Array<string>,
    "person": Array<string>,
    "place": Array<string>,
    "subject": Array<string>,
    "time": Array<string>,
    "id_alibris_id": Array<string>,
    "id_amazon": Array<string>,
    "id_canadian_national_library_archive": Array<string>,
    "id_depósito_legal": Array<string>,
    "id_goodreads": Array<string>,
    "id_google": Array<string>,
    "id_librarything": Array<string>,
    "id_overdrive": Array<string>,
    "id_paperback_swap": Array<string>,
    "id_wikidata": Array<string>,
    "ia_loaded_id": Array<string>,
    "ia_box_id": Array<string>,
    "publisher_facet": Array<string>,
    "person_key": Array<string>,
    "place_key": Array<string>,
    "time_facet": Array<string>,
    "person_facet": Array<string>,
    "subject_facet": Array<string>,
    "_version_": number,
    "place_facet": Array<string>,
    "lcc_sort": string,
    "author_facet": Array<string>,
    "subject_key": Array<string>,
    "ddc_sort": string,
    "time_key": Array<string>
}

export interface iLibrary {
    "numFound": 518,
    "start": 0,
    "numFoundExact": true,
    "docs": Array<iBooks>,
    "num_found": number,
    "q": string,
    "offset": any
}
