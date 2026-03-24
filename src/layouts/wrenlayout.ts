import { Layout } from "../types/layout";

export const LAYOUTS: Layout[] = [
    {
        id: "daspec",
        name: "Spec Classic",
        previewImage: "https://64.media.tumblr.com/85a6a61421fed8257a778e4c8dd8c3de/fecf77982676669a-37/s1280x1920/119cad2b0f77d91a40f976d41279e4df14ca7183.pnj",
        additionalFields: [
            { name: "tagline", label: "Tagline", type: "text", fromLayout: true },
            { name: "orientation", label: "Orientation", type: "text", fromLayout: true },
            { name: "location", label: "Location", type: "text", fromLayout: true },
            { name: "caste", label: "Caste", type: "text", fromLayout: true },
            { name: "lusus", label: "Lusus", type: "text", fromLayout: true },
            { name: "sidebarImageUrl", label: "Sidebar Image URL", type: "text", fromLayout: true },
            { name: "backgroundImageUrl", label: "Background Image URL", type: "text", fromLayout: true }
        ],
        template: `<!--======================================

"VERNOREXIC" (Bootstrap) (Detailed Version)
Code by iinkt on Toyhouse. Designed by venmo (vernorexic) on Toyhouse.

------------

!! CODE RULES & PERMISSIONS:
1. DO NOT remove my credit. You may move it, though!
2. Frankenstein-ing is allowed, as long as the other creator permits it! Just continue to credit me.
3. Feel free to edit this code to your heart's desire! It was made to be customizeable.

!! DO NOT TURN ON WYSIWYG. My codes will not work!

------------

!! COLOUR GUIDE
Use Ctrl+F to find and replace all instances of these colours.

accent colour: #986c53

------------

!! IMAGES, LINKS, AND EMBEDS

Images, links, and embeds all show up in this code. They are noted by the following:

IMGHERE
LINKHERE
EMBEDHERE

For images, copy and paste a link to the image where it says IMGHERE. The link should end in the file format, such as .jpg, .jpeg, .png, or .gif.

For links, copy and paste any link where it says LINKHERE. These are usually meant to be links to other characters.

For Youtube embeds, copy the END of the Youtube video link (which is all of the weird numbers and letters after the watch?v=) and paste where it says EMBEDHERE.

------------

!! FONTAWESOME ICONS
Many icons, I change the sizing of to make them smaller and more in-line with the code. You can replace the whole icon code, but doing so will delete the size tag as well. If you don't want to do this, use Ctrl+F to find and replace all instances of these icons, and replace with the icon's name.
Not all icons in the code are listed, just some that could be changed thematically. You can, of course, edit any icons in the code.

primary icon: fa-sparkle
* NOTE: recommended that this is a simple icon as it it used frequently throughout the code.

skill 1: fa-utensils
skill 2: fa-swords
skill 3: fa-fishing-rod

Note: if you delete a size tag, they follow this format if you would like to replace them: fa-xs , where xs is the sizing.

=======================================-->

<div class="container-fluid p-2" style="max-width:1000px;">
<div class="row no-gutters">

<!--======================================

!! LEFT PANEL: NAME AND BASIC INFO

=======================================-->
    <div class="col-md-3 pr-md-1">
    
        <!--- the main card --->
        <div class="card p-2" style="height:500px; border-bottom-right-radius:0px; border-bottom-left-radius:0px;">
            
            <!-- NAME -->
            <div class="text-center py-2" style="font-size:24px;font-family:georgia;color:#986c53"><strong>
                <i class="fa-regular fa-sparkle fa-sm"></i> 
                
                NAME
                
                <i class="fa-regular fa-sparkle fa-sm"></i>
                </strong></div>
                
            <!-- IMAGE -->
            <!-- use a square image here! -->
            <img src="
            
            IMGHERE
            
            " class="mx-auto rounded" style="max-width:190px; height:auto;">
            
            <!-- handmade divider -->
            <div class="text-center text-muted py-2">• <i class="fa-regular fa-sparkle fa-sm"></i> •</div>
            
            <!-- INFORMATION FIELDS -->
            <div style="overflow-y:auto;">
            <!-- name -->
            <div class="row no-gutters px-3">
               <div class="col-auto text-muted" style="font-family:georgia;">name</div>
               <div class="col px-2"><hr class="my-3"></div>
               <div class="col-auto">content</div>
            </div>
            <!-- called -->
            <div class="row no-gutters px-3">
               <div class="col-auto text-muted" style="font-family:georgia;">called</div>
               <div class="col px-2"><hr class="my-3"></div>
               <div class="col-auto">content</div>
            </div>
            <!-- age -->
            <div class="row no-gutters px-3">
               <div class="col-auto text-muted" style="font-family:georgia;">age</div>
               <div class="col px-2"><hr class="my-3"></div>
               <div class="col-auto">content</div>
            </div>
            <!-- gender -->
            <div class="row no-gutters px-3">
               <div class="col-auto text-muted" style="font-family:georgia;">gender</div>
               <div class="col px-2"><hr class="my-3"></div>
               <div class="col-auto">content</div>
            </div>
            <!-- sexuality -->
            <div class="row no-gutters px-3">
               <div class="col-auto text-muted" style="font-family:georgia;">sexuality</div>
               <div class="col px-2"><hr class="my-3"></div>
               <div class="col-auto">content</div>
            </div>
            <!-- occupation -->
            <div class="row no-gutters px-3">
               <div class="col-auto text-muted" style="font-family:georgia;">occupation</div>
               <div class="col px-2"><hr class="my-3"></div>
               <div class="col-auto">content</div>
            </div>
            
            </div>
            
        </div>
        
        <!-- song card -->
        <div class="card p-1 bg-faded border-0" style="height:50px; border-top-right-radius:0px; border-top-left-radius:0px;">
            <div class="row no-gutters px-2">
                <!-- song title -->
                <div class="col-10 p-1 py-2 text-muted">
                    <em>song title</em>
                </div>
                <!-- embed -->
                <div class="col-2 text-right pr-2 py-2 text-primary">
                    <i class="fa-solid fa-play  ">
                        <!-- EMBED INSTRUCTIONS: copy the END of the youtube video link (all of the weird numbers and letters) and paste where it says EMBEDHERE below. -->
                        <iframe src="
                        
                        https://www.youtube.com/embed/EMBEDHERE?controls=0
                        
                        " class="w-100" style="position:absolute;top:-80px;left:0;height:200px;opacity:0.00001;" frameborder="0"></iframe>
                    </i>
                </div>
            </div>
        </div>
        
    </div>
<!--======================================
!! END OF LEFT PANEL
=======================================-->

<!--======================================

!! MIDDLE PANEL: TABS, CONTENT, AND QUOTE

=======================================-->
    <div class="col-md-6 px-md-1">
    <div class="card bg-transparent border-0" style="height:550px;">
        
        <!-- actual tab code -->
        <div class="card border-0 mb-1" style="width:100%;">
            <div class="row nav nav-tabs text-center pb-0 mx-1 mt-2" style="border:0px; height:100%;">
                
                <!-- tab 1 -->
                <a class="col mx-1 mb-2 btn bg-faded btn-block btn-outline-secondary active" data-toggle="tab" href="#one"><i class="pt- fa-solid fa-user fa-sm"></i></a>
                <!-- tab 2 -->
                <a class="col mx-1 mb-2 btn bg-faded btn-block btn-outline-secondary" data-toggle="tab" href="#two"><i class="fa-solid fa-star"></i></i></a>
                <!-- tab 3 -->
                <a class="col mx-1 mb-2 btn bg-faded btn-block btn-outline-secondary" data-toggle="tab" href="#three"><i class="fa-solid fa-backpack"></i></a>
                <!-- tab 4 -->
                <a class="col mx-1 mb-2 btn bg-faded btn-block btn-outline-secondary" data-toggle="tab" href="#four"><i class="fa-solid fa-book"></i></i></a>
                <!-- tab 5 -->
                <a class="col mx-1 mb-2 btn bg-faded btn-block btn-outline-secondary" data-toggle="tab" href="#five"><i class="fa-solid fa-pen-nib"></i></i></a>
                <!-- tab 6 -->
                <a class="col mx-1 mb-2 btn bg-faded btn-block btn-outline-secondary" data-toggle="tab" href="#six"><i class="fa-solid fa-heart"></i></i></a>
            
            </div>
        </div>
            

        <!-- content card -->
        <div class="card border-0 pb-3 p-2 mb-1 h-100" style="overflow-y:auto;">
            <!-- if you edited the quote card height, this is where you'd edit the height for the main card. -->
            
            <div class="tab-content">
                
                
                <!-- TAB ONE: BASICS -->
                <div class="tab-pane fade active show" id="one">
                    
                    <!-- header -->
                    <div class="row no-gutters mt-2 px-1" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>basics</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-regular fa-user fa-sm"></i>
                        </div>
                    </div>
                    
                    <!-- information fields -->
                    <div class="card bg-faded border-0 p-2">
                        <div class="row no-gutters">
                            
                            <!-- ethnicity -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">ethnicity</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- language -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">language</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- mbti -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">mbti</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- star sign -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">star sign</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- tarot -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">tarot</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- archetype -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">archetype</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- alignment -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">alignment</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- demeanor -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">demeanor</span>
                                <span class="pull-right">content</span>
                            </div>
                            
                        </div>
                    </div>
                    <div class="row no-gutters">
                        
                        <!-- INTRO AND PLAYLIST -->
                        <div class="col-md-6">
                            
                            <!-- header -->
                            <div class="row no-gutters px-1 pt-2" style="font-size:18px;font-family:georgia;color:#986c53;">
                                <div class="col-auto pl-1"><em><strong>intro</strong></em></div>
                                <div class="col px-2"><hr></div>
                                <div class="col-auto"><i class="fa-regular fa-comment fa-sm"></i></div>
                            </div>
                            
                            <!-- intro text -->
                            <div class="card bg-faded border-0 text-muted p-3">
                                <p>Type what you want here. I'd recommend keeping it short, since there's a whole story tab. But luckily, the image to the side will stretch to accomodate it. If you use the pagedoll instead, it will align itself to be centered vertically to whatever length.</p>
                            </div>
                        </div>
                        
                        <!-- IMAGE OPTION: IMAGE (default) -->
                        <div class="col-md-6 pl-2 pt-2">
                            <div class="card border-0 h-100" style="background-size:cover;background-position:right;background-repeat:no-repeat;background-image:url(
                            
                            IMGHERE
                            
                            )"></div>
                        </div>
                        
                        <!-- IMAGE OPTION: PAGEDOLL -->
                        <!-- if you have a pagedoll image that you don't want to crop, you can use this code instead. Works best with vertical pagedolls and short intro text. You could also have two pagedolls, if you wanted. -->
                        <!--
                        <div class="col-md-6 justify-content-center p-2" style="align-items:center">
                            <img src="IMGHERE" class="" style="">
                        </div>
                        -->
                    </div>
                    
                    <!-- header -->
                    <div class="row no-gutters mt-2 px-1" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>playlist</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-solid fa-compact-disc fa-sm"></i></div>
                    </div>
                    
                    <!-- PLAYLIST -->
                    <div class="card bg-faded border-0 text-muted p-3">
                        <ul class="fa-ul m-0 ml-4">
                            <li><span class="fa-li"><i class="fal fa-regular fa-play fa-xs"></i></span>song</li>
                              <li><span class="fa-li"><i class="fal fa-regular fa-play fa-xs"></i></span>song</li>
                              <li><span class="fa-li"><i class="fal fa-regular fa-play fa-xs"></i></span>song</li>
                            </ul>
                    </div>
                            
                    <!-- header -->
                    <div class="row no-gutters px-2 pt-2" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto"><em><strong>aesthetic</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-regular fa-sparkles fa-sm"></i></div>
                    </div>
                    
                    <!-- AESTHETIC PILLS -->
                    <div class="justify-content-center px-3 flex-wrap">
                        <!-- copy and paste as many pills as you would like -->
                        <div class="badge badge-default badge-pill m-1" style="background-color:#986c53"> pill tag </div>
                        <div class="badge badge-default badge-pill m-1" style="background-color:#986c53"> pill tag </div>
                        <div class="badge badge-default badge-pill m-1" style="background-color:#986c53"> pill tag </div>
                        <div class="badge badge-default badge-pill m-1" style="background-color:#986c53"> pill tag </div>
                        <div class="badge badge-default badge-pill m-1" style="background-color:#986c53"> pill tag </div>
                    </div>
                    
                    <!-- AESTHETIC IMAGES -->
                    <div class="row no-gutters pt-2 px-2">
                        
                        <!-- image 1 -->
                        <div class="col m-1">
                            <div class="card border-0 h-100" style="min-height:100px;background-size:cover;background-position:right;background-repeat:no-repeat;background-image:url(
                            
                            IMGHERE
                            
                            )"></div>
                        </div>
                        
                        <!-- image 2 -->
                        <div class="col m-1">
                            <div class="card border-0 h-100" style="min-height:100px;background-size:cover;background-position:right;background-repeat:no-repeat;background-image:url(
                            
                            IMGHERE
                            
                            )"></div>
                        </div>
                        
                        <!-- image 3 -->
                        <div class="col m-1">
                            <div class="card border-0 h-100" style="min-height:100px;background-size:cover;background-position:right;background-repeat:no-repeat;background-image:url(
                            
                            IMGHERE
                            
                            )"></div>
                        </div>
                    </div>
                </div>
            
                
                <!-- TAB TWO: PERSONALITY & STATS -->
                <div class="tab-pane fade" id="two">
                    
                    <!-- header -->
                    <div class="row no-gutters px-1 pt-2" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>personality</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-regular fa-star fa-sm"></i></div>
                    </div>
                    
                    <!-- PERSONALITY PILLS -->
                    <div class="justify-content-center px-3 flex-wrap">
                        <div class="badge badge-success badge-pill m-1"> trait • trait • trait </div>
                        <div class="badge badge-default badge-pill m-1"> trait • trait • trait </div>
                        <div class="badge badge-danger badge-pill m-1"> trait • trait • trait </div>
                        
                    </div>
                    
                    <!-- PERSONALITY DESCRIPTION -->
                    <div class="card bg-faded border-0 text-muted mt-2 p-3">
                        <p>Talk about their personality here. This box expands, so don't be shy, but you can always talk about things more in the story tab. 
                    
                    <p>The pills above are for their traits, positive, neutral, and negative, respectfully. On some themes, the colours may not reflect that, but it's really just how you like it.</div>
                    
                    <!-- LIKES & DISLIKES -->
                    <div class="row no-gutters">
                        
                        <!-- left column -->
                        <div class="col-md-6 pr-1">
                            
                            <!-- header -->
                            <div class="row no-gutters mt-2 px-1" style="font-size:18px;font-family:georgia;color:#986c53;">
                                <div class="col-auto pl-1"><em><strong>likes</strong></em></div>
                                <div class="col px-2"><hr></div>
                                <div class="col-auto"><i class="fa-solid fa-heart fa-sm"></i></div></div>
                                
                            <!-- LIKES -->
                            <div class="card bg-faded border-0 text-muted p-3">
                                <ul class="fa-ul m-0 ml-4">
                                    <!-- you can copy and paste more bullets. -->
                                    <li><span class="fa-li"><i class="fal fa-regular fa-heart fa-xs"></i></span>like</li>
                                    <li><span class="fa-li"><i class="fal fa-regular fa-heart fa-xs"></i></span>like</li>
                                    <li><span class="fa-li"><i class="fal fa-regular fa-heart fa-xs"></i></span>like</li>
                                    <li><span class="fa-li"><i class="fal fa-regular fa-heart fa-xs"></i></span>like</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                        <!-- right column -->
                        <div class="col-md-6 pl-1">
                            
                            <!-- header -->
                            <div class="row no-gutters mt-2 px-1 " style="font-size:18px;font-family:georgia;color:#986c53;">
                                <div class="col-auto pl-1"><em><strong>dislikes</strong></em></div>
                                <div class="col px-2"><hr></div>
                                <div class="col-auto"><i class="fa-solid fa-x fa-xs"></i></div></div>
                                
                            <!-- DISLIKES -->
                            <div class="card bg-faded border-0 text-muted p-3">
                                <ul class="fa-ul m-0 ml-4">
                                    <!-- you can copy and paste more bullets. -->
                                    <li><span class="fa-li"><i class="fal fa-x fa-xs"></i></span>dislike</li>
                                    <li><span class="fa-li"><i class="fal fa-x fa-xs"></i></span>dislike</li>
                                    <li><span class="fa-li"><i class="fal fa-x fa-xs"></i></span>dislike</li>
                                    <li><span class="fa-li"><i class="fal fa-x fa-xs"></i></span>dislike</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <!-- header -->
                    <div class="row no-gutters px-1 mt-2" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>stats</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-solid fa-chart-simple fa-sm"></i></div>
                    </div>
                    <!-- STATISTICS -->
                    <!-- You can change stats by editing the percent value in the width. i.e., 50%. -->
                    <div class="row no-gutters">
                        
                        <!-- strength -->
                        <div class="col-6 px-3">
                            <div class="text-center">strength</div>
                            <div class="progress my-2 rounded-0"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin ="0" aria-valuemax="100" style="width:
                            
                            50%
                            
                            ;height:5px;background-color:#986c53;"></div></div>
                        </div>
                        
                        <!-- dexterity -->
                        <div class="col-6 px-3">
                            <div class="text-center">dexterity</div>
                            <div class="progress my-2 rounded-0"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin ="0" aria-valuemax="100" style="width:
                            
                            50%
                            
                            ;height:5px;background-color:#986c53;"></div></div>
                        </div>
                        
                        <!-- constitution -->
                        <div class="col-6 px-3">
                            <div class="text-center">constitution</div>
                            <div class="progress my-2 rounded-0"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin ="0" aria-valuemax="100" style="width:
                            
                            50%
                            
                            ;height:5px;background-color:#986c53;"></div></div>
                        </div>
                        
                        <!-- intelligence -->
                        <div class="col-6 px-3">
                            <div class="text-center">intelligence</div>
                            <div class="progress my-2 rounded-0"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin ="0" aria-valuemax="100" style="width:
                            
                            50%
                            
                            ;height:5px;background-color:#986c53;"></div></div>
                        </div>
                        
                        <!-- wisdom -->
                        <div class="col-6 px-3">
                            <div class="text-center">wisdom</div>
                            <div class="progress my-2 rounded-0"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin ="0" aria-valuemax="100" style="width:
                            
                            50%
                            
                            ;height:5px;background-color:#986c53;"></div></div>
                        </div>
                        
                        <!-- charisma -->
                        <div class="col-6 px-3">
                            <div class="text-center">charisma</div>
                            <div class="progress my-2 rounded-0"><div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin ="0" aria-valuemax="100" style="width:
                            
                            50%
                            
                            ;height:5px;background-color:#986c53;"></div></div>
                        </div>
                        
                    </div>
                </div>
                
                
                <!-- TAB THREE: SKILLS & INVENTORY -->
                <div class="tab-pane fade" id="three">
                    
                    <!-- header -->
                    <div class="row no-gutters px-1 mt-2" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>skills</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-solid fa-swords fa-sm"></i></div>
                    </div>
                    
                    <!-- SKILLS -->
                    <div class="row no-gutters justify-content-center">
                        
                        <!-- SKILL ONE -->
                        <div class="col-md-4">
                            <div class="card bg-faded border-0 p-2 m-1" style="height:300px;">
                                <!-- skill icon -->
                                <div class="text-center p-1" style="color:#986c53;"><i class="fa-solid fa-utensils"></i></div>
                                <!-- skill name -->
                                <div class="text-center text-muted pb-1"><strong>skill name</strong></div>
                                <!-- proficiency -->
                                <div class="text-center pb-1" style="color:#986c53;">
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-regular fa-sparkle"></i>
                                    <i class="fa-regular fa-sparkle"></i>
                                </div>
                                <!-- skill description -->
                                <div class="text-muted p-1 font-italic" style="overflow-y:auto;">Describe the skill here. It doesn't have to be long, but it will eventually scroll. I will keep talking in this example, so you can see how it scrolls. Filler text filler text filler text</div>
                            </div>
                        </div>
                        
                        <!-- SKILL TWO -->
                        <div class="col-md-4">
                            <div class="card bg-faded border-0 p-2 m-1" style="height:300px;">
                                <!-- skill icon -->
                                <div class="text-center p-1" style="color:#986c53;"><i class="fa-solid fa-swords"></i></div>
                                <!-- skill name -->
                                <div class="text-center text-muted pb-1"><strong>skill name</strong></div>
                                <!-- proficiency -->
                                <div class="text-center pb-1" style="color:#986c53;">
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-regular fa-sparkle"></i>
                                    <i class="fa-regular fa-sparkle"></i>
                                </div>
                                <!-- skill description -->
                                <div class="text-muted p-1 font-italic" style="overflow-y:auto;">Describe the skill here. It doesn't have to be long, but it will eventually scroll.</div>
                            </div>
                        </div>
                        
                        <!-- SKILL THREE -->
                        <div class="col-md-4">
                            <div class="card bg-faded border-0 p-2 m-1" style="height:300px;">
                                <!-- skill icon -->
                                <div class="text-center p-1" style="color:#986c53;"><i class="fa-solid fa-fishing-rod"></i></div>
                                <!-- skill name -->
                                <div class="text-center text-muted pb-1"><strong>skill name</strong></div>
                                <!-- proficiency -->
                                <div class="text-center pb-1" style="color:#986c53;">
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-solid fa-sparkle"></i>
                                    <i class="fa-regular fa-sparkle"></i>
                                    <i class="fa-regular fa-sparkle"></i>
                                </div>
                                <!-- skill description -->
                                <div class="text-muted p-1 font-italic" style="overflow-y:auto;">Describe the skill here. It doesn't have to be long, but it will eventually scroll.</div>
                            </div>
                        </div>
                        
                        <!-- You can paste some more skills here. Just copy and paste the one above, below here. -->
                        
                    </div>
                    
                    <!-- header -->
                    <div class="row no-gutters px-1 mt-2" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>inventory</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-solid fa-box fa-sm"></i></div>
                    </div>
                    
                    <!-- INVENTORY -->
                    
                    <!-- ITEM ONE -->
                    <div class="row no-gutters p-1" style="align-items:center;">
                        
                        <!-- image -->
                        <div class="col-3">
                            <img src="
                            
                            IMGHERE
                            
                            " class="rounded" style="">
                        </div>
                        <!-- description -->
                        <div class="col-9 pl-2">
                            <div class="card bg-faded border-0 p-3">
                                <div class="row no-gutters" style="color:#986c53;">
                                    
                                    <!-- NAME -->
                                    <div class="col-auto"><em><strong>item name</strong></em></div>
                                    <div class="col px-2"><hr class="my-2"></div>
                                    <!-- HEARTS -->
                                    <!-- use fa-solid for filled, and fa-regular for unfilled. -->
                                    <div class="col-auto">
                                        <i class="fa-solid fa-heart fa-sm"></i>
                                        <i class="fa-solid fa-heart fa-sm"></i>
                                        <i class="fa-regular fa-heart fa-sm"></i>
                                        </div>
                                </div>
                                
                                <!-- TEXT -->
                                <div class="text-muted font-italic">Short blurb about the item. If you go long, then the image will center itself to the box.</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- ITEM TWO -->
                    <div class="row no-gutters p-1" style="align-items:center;">
                        
                        <!-- image -->
                        <div class="col-3">
                            <img src="
                            
                            IMGHERE
                            
                            " class="rounded" style="">
                        </div>
                        <!-- description -->
                        <div class="col-9 pl-2">
                            <div class="card bg-faded border-0 p-3">
                                <div class="row no-gutters" style="color:#986c53;">
                                    
                                    <!-- NAME -->
                                    <div class="col-auto"><em><strong>item name</strong></em></div>
                                    <div class="col px-2"><hr class="my-2"></div>
                                    <!-- HEARTS -->
                                    <!-- use fa-solid for filled, and fa-regular for unfilled. -->
                                    <div class="col-auto">
                                        <i class="fa-solid fa-heart fa-sm"></i>
                                        <i class="fa-solid fa-heart fa-sm"></i>
                                        <i class="fa-regular fa-heart fa-sm"></i>
                                        </div>
                                </div>
                                
                                <!-- TEXT -->
                                <div class="text-muted font-italic">Short blurb about the item. If you go long, then the image will center itself to the box.</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- ITEM THREE -->
                    <div class="row no-gutters p-1" style="align-items:center;">
                        
                        <!-- image -->
                        <div class="col-3">
                            <img src="
                            
                            IMGHERE
                            
                            " class="rounded" style="">
                        </div>
                        <!-- description -->
                        <div class="col-9 pl-2">
                            <div class="card bg-faded border-0 p-3">
                                <div class="row no-gutters" style="color:#986c53;">
                                    
                                    <!-- NAME -->
                                    <div class="col-auto"><em><strong>item name</strong></em></div>
                                    <div class="col px-2"><hr class="my-2"></div>
                                    <!-- HEARTS -->
                                    <!-- use fa-solid for filled, and fa-regular for unfilled. -->
                                    <div class="col-auto">
                                        <i class="fa-solid fa-heart fa-sm"></i>
                                        <i class="fa-solid fa-heart fa-sm"></i>
                                        <i class="fa-regular fa-heart fa-sm"></i>
                                        </div>
                                </div>
                                
                                <!-- TEXT -->
                                <div class="text-muted font-italic">Short blurb about the item. If you go long, then the image will center itself to the box.</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- You can paste some more inventory items here. Just copy and paste the one above, below here. -->
                    
                </div>
                
                
                <!-- TAB FOUR: BACKSTORY -->
                <div class="tab-pane fade" id="four">
                    
                    <!-- header -->
                    <div class="row no-gutters mt-2 px-1" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>backstory</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-solid fa-book fa-sm"></i></div></div>
                        
                    <!-- NOTES -->
                    <div class="card bg-faded border-0 text-muted">
                        <ul class="m-0 my-3 pr-3">
                            <li>note</li>
                            <li>note</li>
                            <li>note</li>
                        </ul>
                    </div>
                    
                    <!-- header -->
                    <div class="row no-gutters mt-2 px-1" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>heading</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-regular fa-bookmark fa-sm"></i></div>
                    </div>
                    
                    <!-- TEXT AREA ONE -->
                    <div class="card bg-faded border-0 text-muted p-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra. Purus faucibus ornare suspendisse sed nisi lacus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. </p>
                        <p>Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Vulputate ut pharetra sit amet. Dui ut ornare lectus sit amet est placerat. Vitae suscipit tellus mauris a diam maecenas sed. Facilisis gravida neque convallis a cras semper auctor neque vitae. Nibh nisl condimentum id venenatis a condimentum vitae. Sed velit dignissim sodales ut. Morbi leo urna molestie at. Posuere ac ut consequat semper.</p>
                    </div>
                    
                    <!-- header -->
                    <div class="row no-gutters mt-2 px-1" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>heading</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-regular fa-bookmark fa-sm"></i></div>
                    </div>
                    <!-- TEXT AREA TWO -->
                    <div class="card bg-faded border-0 text-muted p-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra. Purus faucibus ornare suspendisse sed nisi lacus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. </p>
                        <p>Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Vulputate ut pharetra sit amet. Dui ut ornare lectus sit amet est placerat. Vitae suscipit tellus mauris a diam maecenas sed. Facilisis gravida neque convallis a cras semper auctor neque vitae. Nibh nisl condimentum id venenatis a condimentum vitae. Sed velit dignissim sodales ut. Morbi leo urna molestie at. Posuere ac ut consequat semper.</p>
                    </div>
                    
                    <!-- if you want to add more sections, just copy a header and text area above, and paste below here. -->
                    
                </div>
                
                
                <!-- TAB FIVE: APPEARANCE & DESIGN -->
                <div class="tab-pane fade" id="five">
                    <!-- header -->
                    <div class="row no-gutters px-1 mt-2" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>appearance</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-solid fa-image-polaroid fa-sm"></i></div>
                    </div>
                    
                    <!-- REFERENCE & INFO -->
                    <!-- image -->
                    <div class="justify-content-center p-2" style="align-items:center">
                        <img src="
                        
                        IMGHERE
                        
                        " class="" style="">
                    </div>

                    <!-- INFORMATION FIELDS --> 
                    <div class="card bg-faded border-0 p-3 mb-2">
                        <div class="row no-gutters">
                            
                            <!-- height -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">height</span>
                                <span class="pull-right">0'0 / 00 cm.</span>
                            </div>
                            <!-- weight -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">weight</span>
                                <span class="pull-right">0 lbs. / 0 kg.</span>
                            </div>
                            <!-- build -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">build</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- race -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">race</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- hair color -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">hair color</span>
                                <span class="pull-right">content</span>
                            </div>
                            <!-- eye color -->
                            <div class="col-md-6 py-1 px-2">
                                <span class="text-muted" style="font-family:georgia;">eye color</span>
                                <span class="pull-right">content</span>
                            </div>
                        </div>
                        
                        <!-- COLOR PALETTE -->
                        <!-- directions: replace FFFFFF with a hex code. -->

                        <div class="row no-gutters pt-2 justify-content-center">
                            <!-- palette piece 1 -->
                            <div class="col m-1">
                                <div class="card border-0" style="height:25px;background-color:
                                #FFFFFF
                                ;"></div>
                            </div>
                            <!-- palette piece 2 -->
                            <div class="col m-1">
                                <div class="card border-0" style="height:25px;background-color:
                                #FFFFFF
                                ;"></div>
                            </div>
                            <!-- palette piece 3 -->
                            <div class="col m-1">
                                <div class="card border-0" style="height:25px;background-color:
                                #FFFFFF
                                ;"></div>
                            </div>
                            <!-- palette piece 4 -->
                            <div class="col m-1">
                                <div class="card border-0" style="height:25px;background-color:
                                #FFFFFF
                                ;"></div>
                            </div>
                            <!-- palette piece 5 -->
                            <div class="col m-1">
                                <div class="card border-0" style="height:25px;background-color:
                                #FFFFFF
                                ;"></div>
                            </div>
                            
                            <!-- if you want to add more palette pieces, copy one above and paste it below. -->
                            
                        </div>
                    </div>
                    
                    <!-- APPEARANCE TEXT -->
                    <div class="card bg-faded border-0 text-muted p-3">
                        <p>Here's a place to describe your character, if you'd like. And the text box grows as you type in it, so include anything that you would like to. I'm not limiting you this time!</p>
                    </div>
                    
                    <!-- header -->
                    <div class="row no-gutters mt-2 px-1" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>design notes</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-regular fa-pen-nib fa-sm"></i></div>
                    </div>
                    
                    <!-- DESIGN NOTES -->
                    <div class="card bg-faded border-0 text-muted p-3">
                        <ul class="fa-ul m-0 ml-4">
                            <li><span class="fa-li"><i class="fal fa-regular fa-pen fa-sm"></i></span>note</li>
                              <li><span class="fa-li"><i class="fal fa-regular fa-pen fa-sm"></i></span>note</li>
                              <li><span class="fa-li"><i class="fal fa-regular fa-pen fa-sm"></i></span>note</li>
                        </ul>
                    </div>
                    
                </div>
                
                
                <!-- TAB SIX: RELATIONSHIPS -->
                <div class="tab-pane fade" id="six">
                    
                    <!-- header -->
                    <div class="row no-gutters px-1 mt-2" style="font-size:18px;font-family:georgia;color:#986c53;">
                        <div class="col-auto pl-1"><em><strong>relationships</strong></em></div>
                        <div class="col px-2"><hr></div>
                        <div class="col-auto"><i class="fa-regular fa-heart fa-sm"></i></div>
                    </div>
                    
                    <!-- RELATIONSHIP ONE -->
                    <div class="row no-gutters p-1" style="align-items:center;">
                        <!-- image -->
                        <div class="col-md-4">
                            <img src="
                            
                            IMGHERE
                            
                            " class="rounded d-block mx-auto" style="max-height:150px;">
                            <div class="text-center pt-1 pb-md-0 pb-1" style="color:#986c53;">
                                <!-- HEARTS -->
                                <!-- use fa-solid for filled hearts, and fa-regular for unfilled hearts -->
                                <i class="fa-solid fa-heart"></i>
                                <i class="fa-solid fa-heart"></i>
                                <i class="fa-solid fa-heart"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        
                        <!-- RELATIONSHIP TEXT -->
                        <div class="col-md-8 pl-2">
                            <div class="card bg-faded border-0 p-3">
                                <div class="row no-gutters">
                                    <div class="col-auto" style="font-family:georgia;"><a href="LINK" target="_BLANK"><strong>name</strong></a></div>
                                    <div class="col px-2"><hr class="my-2"></div>
                                    <div class="col-auto text-muted">
                                        <em>relationship</em>
                                        </div>
                                </div>
                                <div class="text-muted pt-1">Talk about the relationship here. You can draw out the text if you like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- RELATIONSHIP DIVIDER -->
                    <div class="row no-gutters px-1 my-2" style="font-size:18px;color:#986c53;">
                        <div class="col pr-2"><hr class=""></div>
                        <div class="col-auto"><i class="fa-regular fa-sparkle fa-sm"></i></div>
                        <div class="col pl-2"><hr class=""></div>
                    </div>
                    
                    <!-- RELATIONSHIP TWO -->
                    <div class="row no-gutters p-1" style="align-items:center;">
                        <!-- image -->
                        <div class="col-md-4 pb-md-0 pb-1">
                            <img src="
                            
                            IMGHERE
                            
                            " class="rounded d-block mx-auto" style="max-height:150px;">
                            <div class="text-center pt-1" style="color:#986c53;">
                                <!-- HEARTS -->
                                <!-- use fa-solid for filled hearts, and fa-regular for unfilled hearts -->
                                <i class="fa-solid fa-heart"></i>
                                <i class="fa-solid fa-heart"></i>
                                <i class="fa-solid fa-heart"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        
                        <!-- RELATIONSHIP TEXT -->
                        <div class="col-md-8 pl-2">
                            <div class="card bg-faded border-0 p-3">
                                <div class="row no-gutters">
                                    <div class="col-auto" style="font-family:georgia;"><a href="LINK" target="_BLANK"><strong>name</strong></a></div>
                                    <div class="col px-2"><hr class="my-2"></div>
                                    <div class="col-auto text-muted">
                                        <em>relationship</em>
                                        </div>
                                </div>
                                <div class="text-muted pt-1">Talk about the relationship here. You can draw out the text if you like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <!-- if you want to add more relationships, copy and paste a DIVIDER and a RELATIONSHIP from above, and paste below. --> 
                    
                </div>
                
            </div>
        </div>
        
        <!-- QUOTE -->
        <div class="card p-3 border-0" style="width:100%;background-color:#986c53;">
            <!-- if your quote is too long and hangs over the edge, you can add about 30 px to the height above and subtract 30 px from the main card. -->
            <div class="row no-gutters text-center text-light my-auto align-items-center">
                <div class="col-2"><i class="fa-regular fa-quote-left"></i></div>
                <div class="col-8">
                    <em>You can quote me on that.</em>
                </div>
                <div class="col-2"><i class="fa-regular fa-quote-right"></i></div>
            </div>
        </div>
    </div>
    </div>

<!--======================================
!! END OF MIDDLE PANEL
=======================================-->

<!--======================================

!! RIGHT PANEL: IMAGES

=======================================-->
    <!-- images will be horizontal on desktop and vertical on mobile. -->
    <div class="col-md-3 pl-md-1">
        <div class="row no-gutters pt-md-0 pt-2">
            
            <!-- image one -->
            <div class="col-4 col-md-12 py-md-0 px-md-0 py-sm-1 px-1" style="">
                <div class="card border-0 h-100" style="min-height:178px;background-size:cover;background-position:right;background-repeat:no-repeat;background-image:url(
                
                IMGHERE
                
                )"></div>
            </div>
            <!-- image two -->
            <div class="col-4 col-md-12 py-md-2 py-0 px-md-0 px-1" style="">
                <div class="card border-0 h-100" style="min-height:178px;background-size:cover;background-position:right;background-repeat:no-repeat;background-image:url(
                
                IMGHERE
                
                )"></div>
            </div>
            <!-- image three -->
            <div class="col-4 col-md-12 px-md-0 px-1 px-sm-1" style="">
                <div class="card border-0 h-100" style="min-height:178px;background-size:cover;background-position:right;background-repeat:no-repeat;background-image:url(
                
                IMGHERE
                
                )"></div>
            </div>
            
            <!-- This snippet of code can replace the <div> that creates the image (NOT the column div) if you are using perfectly square images. If you want your images to auto-resize, though, use the code that is given. -->
            <!-- 
            <img src="IMGHERE" class="mx-auto rounded" style="max-height:178px;">
            -->
            
        </div>
    </div>
<!--======================================
!! END OF RIGHT PANEL
=======================================-->
    
</div> <!-- end main container row -->
</div> <!-- end container -->

<!-- CREDIT -->
<!-- DO NOT REMOVE: but feel free to move it somewhere else, where it's still visible! -->
<div class="container-fluid" style="max-width:900px;">
    <div class="text-center"><span data-toggle="tooltip" title="code by iinkt"><a href="https://toyhou.se/28338401.f2u-vernorexic" target="_BLANK"><i class="fa-solid fa-code fa-sm"></i></a></span></div>
<!-- END CREDIT -->
`
    }
];