# YTS.AG - YIFY Movie Torrents

App to display and use data from this API: https://yts.am/api

### Implemented so far:

#### List Movies
https://yts.am/api/v2/list_movies.json

Including: 
- `page` - *Infinite Scrolling Implementation*
- `query_term` - *Type to Search*

### *Coming Soon:*

Filtering:
- `sort_by` - *Sort by one of the following: (title, year, rating, peers, seeds, download_count, like_count, date_added)*
- `order_by` - *Order Ascending/Descending*
- `genre` - *Pick genre to show*
- `quality` - *1080p/720p/3D*
- `minimum_rating` - *Only show movies with ratings equal to or higher that the one set. Possible: 0-9*
- `with_rt_ratings` - *Set to true to always have Rotten Tomato rating*

### *Further Future:*

#### Movie Details
https://yts.am/api/v2/movie_details.json

Including: 
- `with_images` - *Set to true to always have additional images*
- `with_cast` - *Set to true to always have cast details*

#### Movie Liking
#### User Details
#### Upcoming Movies
#### Bookmark Movies
#### Comment on Movies
#### Movie: Suggestions, Comments, Reviews, Parental Guides

