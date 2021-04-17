# UFOs
Using JavaScript and the JavaScript D3.js library to create a webpage with a dynamic, filterable table for displaying information on UFO sightings from a given JavaScript data file. 

# Overview of the analysis:

The purpose of this project was to create a webpage in celebration of World UFO Day, displaying an article on UFO sightings as well as a data visualization project in the form of a table of UFO sightings data, which users can filter based on multiple criteria such as date, city, state, country and shape of the UFO sighting. 

# Results:

Displayed on the webpage is a table of UFO data with a `Filter Search` panel to the left of the table. As you can see from the far left image below, all of the unfiltered data is displayed in the table when the page is loaded, and the empty `Filter Search` panel contains default prompts for the user within each of the filter bars. A user can filter the table by a single criterion, such as date, by entering a date and pressing `enter` to reload the table. Or, as displayed in the far right picture, a user can filter the table by multiple criteria, such as date and city, by once again pressing `enter` after typing the additional filter criteria. To reload the original unfiltered table, the user can simply refresh the page, or delete the values from the filter bars before pressing `enter`.


| Table Filter | Apply One Filter | Apply Multiple Filters |
:-------------------------:|:-------------------------:|:--------------|
![Filter Table](/static/images/table_filter.png) | ![Filtered by Date](/static/images/filter_date.png) | ![Filtered by Date and City](/static/images/filter_date_city.png)


# Summary:

While the webpage is nicely stylized thanks to the HTML link to BootstrapCDN, and the filter for the UFO table data is functional, it is limited in that the filter is case-sensitive. While the default filter prompt cues users in to the expected format, if a user were to enter "Benton" rather than "benton" under the `City` filter, no results would be returned. This could be remedied by attaching `toLowerCase()` methods in line 63 of the app.js file. 

Further, while the webpage's article mentions local CEO and anti-alien activist V. Isualize and her community engagement initiative "Leave Aliens Alone" (LAA), there are no links on the webpage directing users to other pages or sites with the relevant mentioned content. 

Finally, the UFO sightings data from the provided JavaScript file is limited and static. The comments for many of the sightings are cut off before completion, and the entirety of the data is from 2010. If there is a scraping-friendly website available with UFO sightings data, a button could be added to the webpage, which, when clicked, would prompt a scraping function which could retrieve and store up-to-date UFO sightings data in a NoSQL database before displaying it in the table on the webpage. 
