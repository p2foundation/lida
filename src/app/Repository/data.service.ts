import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public mtnBundles = [
        {
            "network_id": 4,
            "plan_id": "flexi_data_bundle",
            "validity": "N/A",
            "plan_name": "Data Bundle",
            "type": "DATA_BUNDLE",
            "volume": "Flexi",
            "category": "Flexi",
            "price": "0.0000",
            "flexible_amount": true
        },
        {
            "network_id": 4,
            "plan_id": "data_bundle_1",
            "validity": "NO EXPIRY",
            "plan_name": "data_bundle_1",
            "type": "DATA_BUNDLE",
            "volume": "24.27 MB",
            "category": "DATA_BUNDLE",
            "price": "0.5000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "data_bundle_2",
            "validity": "NO EXPIRY",
            "plan_name": "data_bundle_2",
            "type": "DATA_BUNDLE",
            "volume": "48.54 MB",
            "category": "DATA_BUNDLE",
            "price": "1.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "data_bundle_3",
            "validity": "NO EXPIRY",
            "plan_name": "data_bundle_3",
            "type": "DATA_BUNDLE",
            "volume": "476.19 MB",
            "category": "DATA_BUNDLE",
            "price": "3.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "data_bundle_4",
            "validity": "NO EXPIRY",
            "plan_name": "data_bundle_4",
            "type": "DATA_BUNDLE",
            "volume": "980.39 MB",
            "category": "DATA_BUNDLE",
            "price": "10.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "data_bundle_5",
            "validity": "NO EXPIRY",
            "plan_name": "data_bundle_5",
            "type": "DATA_BUNDLE",
            "volume": "216.47 GB",
            "category": "DATA_BUNDLE",
            "price": "399.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "kokrokoo_bundle_1",
            "validity": "NO EXPIRY",
            "plan_name": "kokrokoo_bundle_1",
            "type": "DATA_BUNDLE",
            "volume": "400MB and 20 Mins kokrokoo bundle",
            "category": "KOKROKOO_BUNDLE",
            "price": "1.0900",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "flexi_midnight_bundle",
            "validity": "N/A",
            "plan_name": "Mid Night",
            "type": "DATA_BUNDLE",
            "volume": "Flexi",
            "category": "Flexi",
            "price": "0.0000",
            "flexible_amount": true
        },
        {
            "network_id": 4,
            "plan_id": "flexi_social_media_bundle",
            "validity": "N/A",
            "plan_name": "Social Media",
            "type": "DATA_BUNDLE",
            "volume": "Flexi",
            "category": "Flexi",
            "price": "0.0000",
            "flexible_amount": true
        },
        {
            "network_id": 4,
            "plan_id": "social_media_bundle_1",
            "validity": "NO EXPIRY",
            "plan_name": "social_media_bundle_1",
            "type": "DATA_BUNDLE",
            "volume": "97.09 MB",
            "category": "SOCIAL_MEDIA",
            "price": "1.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "social_media_bundle_2",
            "validity": "NO EXPIRY",
            "plan_name": "social_media_bundle_2",
            "type": "DATA_BUNDLE",
            "volume": "485.44 MB",
            "category": "SOCIAL_MEDIA",
            "price": "5.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "social_media_bundle_3",
            "validity": "NO EXPIRY",
            "plan_name": "social_media_bundle_3",
            "type": "DATA_BUNDLE",
            "volume": "970.87 MB",
            "category": "SOCIAL_MEDIA",
            "price": "10.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "flexi_video_bundle",
            "validity": "N/A",
            "plan_name": "Video",
            "type": "DATA_BUNDLE",
            "volume": "Flexi",
            "category": "Flexi",
            "price": "0.0000",
            "flexible_amount": true
        },
        {
            "network_id": 4,
            "plan_id": "video_bundle_1",
            "validity": "NO EXPIRY",
            "plan_name": "video_bundle_1",
            "type": "DATA_BUNDLE",
            "volume": "185.19 MB",
            "category": "VIDEO_BUNDLE",
            "price": "1.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "video_bundle_2",
            "validity": "NO EXPIRY",
            "plan_name": "video_bundle_2",
            "type": "DATA_BUNDLE",
            "volume": "925.93 MB",
            "category": "VIDEO_BUNDLE",
            "price": "5.0000",
            "flexible_amount": false
        },
        {
            "network_id": 4,
            "plan_id": "video_bundle_3",
            "validity": "NO EXPIRY",
            "plan_name": "video_bundle_3",
            "type": "DATA_BUNDLE",
            "volume": "1.81 GB",
            "category": "VIDEO_BUNDLE",
            "price": "10.0000",
            "flexible_amount": false
        }
    ];
    public vfBundles =  [
        {
            "network_id": 6,
            "plan_id": "BDLBTBOSSUD1",
            "validity": "5",
            "plan_name": "BDLBTBOSSUD1",
            "type": "DATA_BUNDLE",
            "volume": "3.5 GB",
            "category": "Daily",
            "price": "10.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "BDLBTBOSSUWE",
            "validity": "5",
            "plan_name": "BDLBTBOSSUWE",
            "type": "DATA_BUNDLE",
            "volume": "4.5 GB",
            "category": "Daily",
            "price": "13.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "BDLDATABNIGHT2",
            "validity": "12am – 4am",
            "plan_name": "BDLDATABNIGHT2",
            "type": "DATA_BUNDLE",
            "volume": "2 GB",
            "category": "Daily",
            "price": "2.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "BDLDATABNIGHT3",
            "validity": "12am-4am",
            "plan_name": "BDLDATABNIGHT3",
            "type": "DATA_BUNDLE",
            "volume": "7.5 GB",
            "category": "Monthly",
            "price": "5.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "BDLHRBOOST2",
            "validity": "1 Hour",
            "plan_name": "BDLHRBOOST2",
            "type": "DATA_BUNDLE",
            "volume": "500 MB",
            "category": "Daily",
            "price": "1.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "BDLHRBOOST3",
            "validity": "1 Hour",
            "plan_name": "BDLHRBOOST3",
            "type": "DATA_BUNDLE",
            "volume": "2048 MB",
            "category": "Daily",
            "price": "2.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUND100",
            "validity": "30",
            "plan_name": "DATABUND100",
            "type": "DATA_BUNDLE",
            "volume": "20 GB",
            "category": "Monthly",
            "price": "100.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUND2MORCH1",
            "validity": "15",
            "plan_name": "DATABUND2MORCH1",
            "type": "DATA_BUNDLE",
            "volume": "1.7 GB",
            "category": "Weekly",
            "price": "10.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUND2MORCH2",
            "validity": "30",
            "plan_name": "DATABUND2MORCH2",
            "type": "DATA_BUNDLE",
            "volume": "4.5 GB",
            "category": "Monthly",
            "price": "20.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUND2MORCH3",
            "validity": "30",
            "plan_name": "DATABUND2MORCH3",
            "type": "DATA_BUNDLE",
            "volume": "10.5 GB",
            "category": "Monthly",
            "price": "50.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUNDBMXDLNR",
            "validity": "1",
            "plan_name": "DATABUNDBMXDLNR",
            "type": "DATA_BUNDLE",
            "volume": "569 MB",
            "category": "Daily",
            "price": "3.2500",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUNDBMXDLY",
            "validity": "1",
            "plan_name": "DATABUNDBMXDLY",
            "type": "DATA_BUNDLE",
            "volume": "550 MB",
            "category": "Daily",
            "price": "3.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUNDGAP1_NR",
            "validity": "2",
            "plan_name": "DATABUNDGAP1_NR",
            "type": "DATA_BUNDLE",
            "volume": "1024 MB",
            "category": "Daily",
            "price": "5.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUNDGAP4",
            "validity": "10",
            "plan_name": "DATABUNDGAP4",
            "type": "DATA_BUNDLE",
            "volume": "4.14 GB",
            "category": "Weekly",
            "price": "21.5000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUNDJBOPTIM",
            "validity": "30",
            "plan_name": "DATABUNDJBOPTIM",
            "type": "DATA_BUNDLE",
            "volume": "200 GB",
            "category": "Monthly",
            "price": "400.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUNDJMAX",
            "validity": "30",
            "plan_name": "DATABUNDJMAX",
            "type": "DATA_BUNDLE",
            "volume": "100 GB",
            "category": "Monthly",
            "price": "300.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATABUNDJSTREAM",
            "validity": "30",
            "plan_name": "DATABUNDJSTREAM",
            "type": "DATA_BUNDLE",
            "volume": "40 GB",
            "category": "Monthly",
            "price": "200.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATANVCHTDLY",
            "validity": "NO EXPIRY",
            "plan_name": "DATANVCHTDLY",
            "type": "DATA_BUNDLE",
            "volume": "155 MB",
            "category": "Daily",
            "price": "2.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATANVDR1DLY",
            "validity": "NO EXPIRY",
            "plan_name": "DATANVDR1DLY",
            "type": "DATA_BUNDLE",
            "volume": "65 MB",
            "category": "Daily",
            "price": "1.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATANVDR5WLY",
            "validity": "NO EXPIRY",
            "plan_name": "DATANVDR5WLY",
            "type": "DATA_BUNDLE",
            "volume": "650 MB",
            "category": "Daily",
            "price": "5.0000",
            "flexible_amount": false
        },
        {
            "network_id": 6,
            "plan_id": "DATANVSTRDLY",
            "validity": "NO EXPIRY",
            "plan_name": "DATANVSTRDLY",
            "type": "DATA_BUNDLE",
            "volume": "26 MB",
            "category": "Daily",
            "price": "0.5000",
            "flexible_amount": false
        }
    ];
    public airtelBundles = [];
    public tigoBundles = [];
    public gloghBundles = [
        {
            "network_id": 3,
            "plan_id": "BUNDLE_1.5GB_Plan",
            "validity": "10",
            "plan_name": "BUNDLE_1.5GB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "1.5 GB",
            "category": "DATA_BUNDLE",
            "price": "5.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_1.5GB_SatPlan",
            "validity": "1",
            "plan_name": "BUNDLE_1.5GB_SatPlan",
            "type": "DATA_BUNDLE",
            "volume": "1.5 GB",
            "category": "DATA_BUNDLE",
            "price": "2.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_1.8GB_SunPlan",
            "validity": "1",
            "plan_name": "BUNDLE_1.8GB_SunPlan",
            "type": "DATA_BUNDLE",
            "volume": "1.8 GB",
            "category": "DATA_BUNDLE",
            "price": "2.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_100GB_Plan",
            "validity": "90",
            "plan_name": "BUNDLE_100GB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "100 GB",
            "category": "DATA_BUNDLE",
            "price": "150.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_10GB_Plan",
            "validity": "30",
            "plan_name": "BUNDLE_10GB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "10 GB",
            "category": "DATA_BUNDLE",
            "price": "40.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_15GB_Plan",
            "validity": "30",
            "plan_name": "BUNDLE_15GB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "15 GB",
            "category": "DATA_BUNDLE",
            "price": "50.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_20GB_Plan",
            "validity": "30",
            "plan_name": "BUNDLE_20GB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "20 GB",
            "category": "DATA_BUNDLE",
            "price": "60.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_300MB_Plan",
            "validity": "2",
            "plan_name": "BUNDLE_300MB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "300 MB",
            "category": "DATA_BUNDLE",
            "price": "1.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_30GB_plan",
            "validity": "60",
            "plan_name": "BUNDLE_30GB_plan",
            "type": "DATA_BUNDLE",
            "volume": "30 GB",
            "category": "DATA_BUNDLE",
            "price": "80.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_4.2GB_Plan",
            "validity": "30",
            "plan_name": "BUNDLE_4.2GB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "4.2 GB",
            "category": "DATA_BUNDLE",
            "price": "20.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_4GB_Plan",
            "validity": "10",
            "plan_name": "BUNDLE_4GB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "4 GB",
            "category": "DATA_BUNDLE",
            "price": "10.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_600MB_Plan",
            "validity": "4",
            "plan_name": "BUNDLE_600MB_Plan",
            "type": "DATA_BUNDLE",
            "volume": "600 MB",
            "category": "DATA_BUNDLE",
            "price": "1.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_60GB_plan",
            "validity": "90",
            "plan_name": "BUNDLE_60GB_plan",
            "type": "DATA_BUNDLE",
            "volume": "60 GB",
            "category": "DATA_BUNDLE",
            "price": "100.0000",
            "flexible_amount": false
        },
        {
            "network_id": 3,
            "plan_id": "BUNDLE_UNLIMITED_Plan",
            "validity": "30",
            "plan_name": "BUNDLE_UNLIMITED_Plan",
            "type": "DATA_BUNDLE",
            "volume": "UNLIMITED Data",
            "category": "DATA_BUNDLE",
            "price": "300.0000",
            "flexible_amount": false
        }
    ];

    constructor(){}
}
