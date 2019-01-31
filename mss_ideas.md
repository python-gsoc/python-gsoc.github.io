Python MSS Ideas
----------------


About MSS
-----------

https://mss.readthedocs.io/en/stable/_static/mss-logo.png
MSS - Mission Support System
For discussion of the possibilites of the research flights, the Mission Support System (MSS) was developed. This software helps to review a big amount of metereological and model data by viewing the forecasted parameters of interest along possible regions of a proposed flight path. Data and possible flight paths can be displayed on a hoizontal view (map projection) or on a vertical view (along the proposed flight path). Flight paths can be constructed and modified on these views. Exchange through a waypoint table is also possible.

Further details:
http://www.geosci-model-dev.net/5/55/2012/gmd-5-55-2012.pdf


-   What software are you creating?

    We develop the Mission Support System. It is a client/server application. This is used to create flightplans and discuss these with pilots of research aircraft. These carry a comprehensive scientific payload comprised of data aquisition instruments by different companies and research institutions. The flightpath is designed by local and remote scientists based on meterologic forecast data on the QT5 MSS gui application.
    
-   Why is it interesting?
    
    We already have added support for several OWS data providers and are able to serve data of our own. The architecture of the software package enables its use in countries with a poor internet connection. For our atmospheric measurements, we often have to go to remote regions that lack high speed internet. Improving the software will improve the quality of the research flights and will also enable its use for other scientific areas, e.g. planning of ship routes
    
-   Who uses it?
     
    It is used mainly by scientists of various institutions involved in scientific aircraft based missions, including universities and the German research institutions DLR, KIT, and Forschungszentrum Jülich.
    
-   What languages is it written in?
    
    Python
    
-   How is it going to change the world?

    The software already did a small change, it enabled scientific groups to share aircraft flight hours because they could plan flights dedicated to several different scientific aims. Such, it was already possible to generate more complicated and effective research flights for the German HALO aircraft and the Russian Geophysica aircraft, thus spending the taxpayers money more wisely to get better scientific results.



Contacting MSS
--------------

-   IRC channel: Developing is done on our https://mss-devel.slack.com slack channel, I'm available also on irc.freenode.net @dreimark
-   Mailing list(s): mss-info@fz-juelich.de

-   List contact methods you actually use and will have mentors
    monitoring!
    
    https://mss-devel.slack.com
    
    mss-info@fz-juelich.de
    
    We also can use video conferencing systems like bigbluebutton


Include any special instructions/info about communicating: e.g. what
time zones are your mentors in? do you prefer it if gsoc students
introduce themselves first or just dive in? are there any common
mistakes students make when making a first impression?

We are in Germany UTC+1,
We would prefer gsoc student introduce themselves first on the mss-info mail channel.




Getting Started
---------------

Links to setup instructions go here. Some suggested things to answer:

-   Where is the link to a setup guide for new developers?

    https://mss.readthedocs.io/en/stable/development.html

-   Are there any unusual libraries/applications that need to be
    installed first?

    We are based on anaconda3 and conda-forge.


-   What type of source control do you use? (include links to help and
    setup guides!)
    
    
    * We use git on bitbucket
    https://bitbucket.org/wxmetvis/mss
    
    * Git tutorial on bitbucket:
    https://www.atlassian.com/git
    
    * Bitbucket tutorial
    https://confluence.atlassian.com/bitbucket/tutorials-755338051.html
    
    * MSS Development Guidelines
    https://mss.readthedocs.io/en/stable/development.html
    
    
-   What's the process for submitting your first bug fix?

    We like to have a fork of the project, creating a branch based on the development branch, claiming an issue, working on that issue, talking about that, sending a pull request


-   Where should students look to find easy bugs to try out?

    https://bitbucket.org/wxmetvis/mss/wiki/issues%20to%20start%20with



Project Ideas
-------------


### 1. Update geographical plotting routines

see https://bitbucket.org/wxmetvis/mss/wiki/GSOC2019/Update%20geographical%20plotting%20routines


### 2. Support of multiple Web Mapping Service layers

see https://bitbucket.org/wxmetvis/mss/wiki/GSOC2019/Support%20of%20multiple%20Web%20Mapping%20Service%20layers
    
    

