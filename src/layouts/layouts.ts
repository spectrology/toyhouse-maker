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
        template: `
            <div style="background-image: url('{{backgroundImageUrl}}'); background-size: cover; background-position: center">
                <div class="container">
                    <div class="row">
                        <!-- Sidebar -->
                        <div class="col col-12 order-lg-2 col-lg-4 text-light text-center p-0"
                            style="background-color:rgba(0,0,0,.6)">
                            <div class="row position-sticky sticky-top p-5">
                                <div class="col col-12">
                                    <div class="row">
                                        <div class="col col-12">
                                            <h2>{{name}}</h2>
                                                <h4 class="text-secondary">{{tagline}}</h4>
                                        </div>
                                        <div class="col col-12 col-sm-6 offset-sm-3 col-lg-12 offset-lg-0">
                                            <div class="my-3" style="border-radius: 50%; background-image: url('{{sidebarImageUrl}}'); 
                                width: 100%; padding: 50%; background-size: cover; background-position: center">
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="col col-12">
                                    <!-- Info Line Start -->
                                    <div class="row p-0">
                                        <div class="col col-3 text-left">
                                            <b><em>pronouns</em></b>
                                        </div>
                                        <div class="col col-9 text-right">
                                            {{pronouns}}
                                        </div>
                                    </div>
                                    <!-- Info Line End -->
                                    <hr class="border-secondary my-2">
                                    <!-- Info Line Start -->
                                    <div class="row">
                                        <div class="col col-3 text-left">
                                            <b><em>age</em></b>
                                        </div>
                                        <div class="col col-9 text-right">
                                            {{age}}
                                        </div>
                                    </div>
                                    <!-- Info Line End -->
                                    <hr class="border-secondary my-2">
                                    <!-- Info Line Start -->
                                    <div class="row">
                                        <div class="col col-3 text-left">
                                            <b><em>height</em></b>
                                        </div>
                                        <div class="col col-9 text-right">
                                           {{height}}
                                        </div>
                                    </div>
                                    <!-- Info Line End -->
                                    <hr class="border-secondary my-2">
                                    <!-- Info Line Start -->
                                    <div class="row">
                                        <div class="col col-3 text-left">
                                            <b><em>orientation</em></b>
                                        </div>
                                        <div class="col col-9 text-right">
                                            {{orientation}}
                                        </div>
                                    </div>
                                    <!-- Info Line End -->
                                    <hr class="border-secondary my-2">
                                    <!-- Info Line Start -->
                                    <div class="row">
                                        <div class="col col-3 text-left">
                                            <b><em>location</em></b>
                                        </div>
                                        <div class="col col-9 text-right">
                                            {{location}}
                                        </div>
                                    </div>
                                    <!-- Info Line End -->
                                    <hr class="border-secondary my-2">
                                    <!-- Info Line Start -->
                                    <div class="row">
                                        <div class="col col-3 text-left">
                                            <b><em>occupation</em></b>
                                        </div>
                                        <div class="col col-9 text-right">
                                            {{occupation}}
                                        </div>
                                    </div>
                                    <!-- Info Line End -->
                                    <hr class="border-secondary my-2">
                                    <!-- Info Line Start -->
                                    <div class="row">
                                        <div class="col col-3 text-left">
                                            <b><em>caste</em></b>
                                        </div>
                                        <div class="col col-9 text-right">
                                            {{caste}}
                                        </div>
                                    </div>
                                    <!-- Info Line End -->
                                    <hr class="border-secondary my-2">
                                    <!-- Info Line Start -->
                                    <div class="row">
                                        <div class="col col-3 text-left">
                                            <b><em>lusus</em></b>
                                        </div>
                                        <div class="col col-9 text-right">
                                            {{lusus}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Profile -->
                        <div class="col col-12 col-lg-8 p-lg-4 col-xl-7 offset-xl-1 p-0">
                            <div class="card p-4">

                                <!-- Introduction -->
                                <div id="intro" class="mb-4">
                                    <h1 class="text-center"><b>intro</b></h1>
                                    {{bio}}
                                </div>
                                <!-- End Introduction-->

                                <!-- Skills -->
                                <div id="skills">
                                    <h1 class="text-center"><b>skills</b></h1>
                                    <div class="row pt-2">
                                        <div class="col col-12 col-md-6 p-0 pl-2 pr-2">
                                            <div class="card p-3 border-0" style="background-color: rgba(0,0,0,.04)">
                                                <h2>strengths</h2>
                                                <div class="row text-left">
                                                    <div class="col col-2">
                                                        <i class="fa fa-plus"></i>
                                                    </div>
                                                    <div class="col col-10">
                                                        {{strength1}}
                                                    </div>
                                                </div>
                                                <div class="row text-left">
                                                    <div class="col col-2">
                                                        <i class="fa fa-plus"></i>
                                                    </div>
                                                    <div class="col col-10">
                                                        {{strength2}}
                                                    </div>
                                                </div>
                                                <div class="row text-left">
                                                    <div class="col col-2">
                                                        <i class="fa fa-plus"></i>
                                                    </div>
                                                    <div class="col col-10">
                                                        {{strength3}}
                                                    </div>
                                                </div>
                                                <div class="row text-left">
                                                    <div class="col col-2">
                                                        <i class="fa fa-plus"></i>
                                                    </div>
                                                    <div class="col col-10">
                                                        {{strength4}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col-12 col-md-6 p-0 pr-2 pl-2">
                                            <div class="card p-3 border-0" style="background-color: rgba(0,0,0,.04)">
                                                <h2>weaknesses</h2>
                                                <div class="row text-left">
                                                    <div class="col col-2">
                                                        <i class="fa fa-minus"></i>
                                                    </div>
                                                    <div class="col col-10">
                                                        {{weakness1}}
                                                    </div>
                                                </div>
                                                <div class="row text-left">
                                                    <div class="col col-2">
                                                        <i class="fa fa-minus"></i>
                                                    </div>
                                                    <div class="col col-10">
                                                        {{weakness2}}
                                                    </div>
                                                </div>
                                                <div class="row text-left">
                                                    <div class="col col-2">
                                                        <i class="fa fa-minus"></i>
                                                    </div>
                                                    <div class="col col-10">
                                                        {{weakness3}}
                                                    </div>
                                                </div>
                                                <div class="row text-left">
                                                    <div class="col col-2">
                                                        <i class="fa fa-minus"></i>
                                                    </div>
                                                    <div class="col col-10">
                                                        {{weakness4}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Skills-->

                                <!-- Personality -->
                                <div id="personality" class="mt-4">
                                    <h1 class="text-center"><b>personality</b></h1>
                                    likes and dislikes
                                </div>
                                <!-- End Personality -->

                                <!-- Relationships -->
                                <div id="relationships" class="mt-4">
                                    <h1 class="text-center"><b>relationships</b></h1>
                                    <div class="row mt-3">
                                        <div class="col col-3" style="min-height: 100%">
                                            <div style="background-color: rgba(0,0,0,.04); max-height: 120px; min-height: 80px" class="h-100 w-100">
                                                
                                            </div>
                                        </div>
                                        <div class="col col-9 text-left">
                                            <h3>friend</h3>
                                            <p>vert align this center</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Relationships -->

                                <!-- Links -->
                                <div id="links" class="mt-4">
                                    <h1 class="text-center"><b>links</b></h1>
                                    description of links
                                </div>
                                <!-- End Links -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
    },
];