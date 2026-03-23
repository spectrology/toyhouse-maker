import { Theme } from "../types/theme";

export const THEMES: Theme[] = [
    {
        id: "daspec",
        name: "Spec Classic",
        previewImage: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1136021131.jpg",
        additionalFields: [
            { name: "tagline", label: "Tagline", type: "text", fromTheme: true },
            { name: "orientation", label: "Orientation", type: "text", fromTheme: true },
            { name: "location", label: "Location", type: "text", fromTheme: true },
            { name: "lusus", label: "Lusus", type: "text", fromTheme: true },
            { name: "sidebarImageUrl", label: "Sidebar Image URL", type: "text", fromTheme: true }
        ],
        template: `
            <div>
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
                                            {{blood}}
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
                                <div id="intro">
                                    <h1 class="text-center"><b>intro;</b></h1>
                                    {{bio}}
                                </div>
                                <!-- End Introduction-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
    },
    // {
    //     id: "theatre",
    //     name: "Theatre Poster",
    //     style: `
    //         .poster{font-family:Georgia,serif;color:#fff;background:linear-gradient(135deg,#8e44ad,#3498db);padding:24px;border-radius:6px;width:360px}
    //         .poster .name{font-size:26px;font-weight:700}
    //         .poster .subtitle{opacity:0.9;margin-bottom:12px}
    //         .poster img{width:100%;height:160px;object-fit:cover;border-radius:4px;margin-top:12px}
    //     `,
    //     template: `
    //         <div class="poster">
    //             <div class="name">{{name}}</div>
    //             <div class="subtitle">{{class}} · Level {{level}}</div>
    //             <div style="font-size:14px;opacity:0.95">{{bio}}</div>
    //             <img src="{{avatar}}" alt="{{name}}"/>
    //         </div>
    //     `,
    // },
];