<?php

/*
 * custom functions for website.
 */

/*
*Allow search for only posts and exclude pages
*/
// search filter
function itexc_search_filter($wp_query) {
   if ($wp_query->is_search) {
      $wp_query->set('post_type','post');
   }
   return $wp_query;
}
add_filter('pre_get_posts','itexc_search_filter');

/*
* Generate the image HTML from the advanced custom field value.
*/
function itexc_get_image_html_from_acf_field($pid,$w=1254,$h=559,$class = "img-responsive"){
  $atmt_id =get_post_thumbnail_id($pid);
  if(function_exists('get_field')){
   $atmt_url= get_field('upload_image_with_crop_functionality',$pid);
  }

  //create an HTML of this URL
 $html_image = "";
  if(!empty($atmt_url)){
   $html_image="<img width='$w' height='$h' title='".get_the_title($pid)."' alt='".get_the_title($pid)."' class='image->$pid $class' src='".$atmt_url."'>";
 }  
  return $html_image;
}

/*
 * option framework returning values.
 */
function itexc_of_get_option($id) {

    return of_get_option($id);
}

/*
 * Generate thumbnail with wordpress custom size options
 */

function itexc_get_thumbnail_html_with_customsize($postid, $sizearr, $class = "thumbnailimage") {

    $imgHTML = "";
    //Check this post have the thumbnail image or not.
    if (has_post_thumbnail($postid)) {
        //generate thumbnail id of this post.
        $thumbnailid = get_post_thumbnail_id($postid);

        $default_attr = array(
            'class' => "thumbnail-image $class",
            'alt' => trim(strip_tags(get_the_title($postid))),
            'title' => trim(strip_tags(get_the_title($postid))),
        );
        $imgHTML = wp_get_attachment_image($thumbnailid, $sizearr, "", $default_attr);
    }
    return $imgHTML;
}

/*
 * Generate timthumb image via post id.
 */

function itexc_generate_timthumb_imghtml($imgURL, $w = 381, $h = 179, $z = 1, $class = "thumbnailimage") {

    $timHTML = "";

    $singleClass =""; //this class works only single page
    if(is_single()){
    $singleClass ="single-thumb-full";  
    }

    $timURL = get_stylesheet_directory_uri() . "/timthumb.php?src=$imgURL&amp;w=$w&amp;h=$h&amp;z=$z";
    $title = get_the_title($pid);
    $timHTML = "<img src='$timURL' alt='$title' title='$title' class='$class $singleClass' />";

    return $timHTML;
}

/*
 * Generate the post thumbnail image as per image uploaded by admin .
 * i.e select the above method automatically which one is best as per situation.
 */

function itexc_get_thumbimage_image($postid, $w = 381, $h = 180, $z = 1, $class = "thumbnailimage") {

    $output = "";
    if (has_post_thumbnail($postid)) {
        $thumbnailid = get_post_thumbnail_id($postid);
        $image_arr = wp_get_attachment_image_src($thumbnailid, 'full'); // returns an array

        $imgURL = $image_arr[0];
        $imgWIDTH = $image_arr[1];
        $imgHEIGHT = $image_arr[2];

    $singleClass =""; //this class works only single page
    if(is_single()){
    $singleClass ="$class single-thumb-full";  
    }


        /*
         * For selecting the method,we have the plan.
         * if uploading image widht > generating thumbnail image => we use default wp method for generate thumbnail.
         * othewise use the timthumb image.
         * Note : we will take the 10px margin size also.
         */
        if ($diffWidth <= 70) {
            $output = itexc_get_thumbnail_html_with_customsize($postid, array($w, $h), $class = "thumbnailimage $singleClass");
        } else {
            $output = itexc_generate_timthumb_imghtml($imgURL, $w = 381, $h = 179, $z = 1, $class = "thumbnailimage $singleClass");
        }

        //adding permalink on image
      //  $output = "<a href='".  get_permalink($postid)."'>".$output ."</a>";
        
        return $output;
    }
}

//******************************************* Country list ****************
//update the country list data into the database.
//Ref: http://dominiquedecooman.com/blog/list-country-codes-and-names-php-array-key-code-and-value-name-english

$countries_list = array(
    'AF' => 'AFGHANISTAN','AL' => 'ALBANIA','DZ' => 'ALGERIA','AS' => 'AMERICAN SAMOA','AD' => 'ANDORRA','AO' => 'ANGOLA',
    'AI' => 'ANGUILLA','AQ' => 'ANTARCTICA',
    'AG' => 'ANTIGUA AND BARBUDA', 'AR' => 'ARGENTINA', 'AM' => 'ARMENIA', 'AW' => 'ARUBA', 
    'AU' => 'AUSTRALIA', 'AT' => 'AUSTRIA', 'AZ' => 'AZERBAIJAN', 'BS' => 'BAHAMAS',
    'BH' => 'BAHRAIN', 'BD' => 'BANGLADESH', 'BB' => 'BARBADOS', 'BY' => 'BELARUS', 
    'BE' => 'BELGIUM', 'BZ' => 'BELIZE', 'BJ' => 'BENIN', 'BM' => 'BERMUDA', 'BT' => 'BHUTAN',
    'BO' => 'BOLIVIA', 'BA' => 'BOSNIA AND HERZEGOVINA', 'BW' => 'BOTSWANA', 'BV' => 'BOUVET ISLAND',
    'BR' => 'BRAZIL', 'IO' => 'BRITISH INDIAN OCEAN TERRITORY', 'BN' => 'BRUNEI DARUSSALAM', 'BG' => 'BULGARIA',
    'BF' => 'BURKINA FASO', 'BI' => 'BURUNDI', 'KH' => 'CAMBODIA', 'CM' => 'CAMEROON', 'CA' => 'CANADA', 'CV' => 'CAPE VERDE',
    'KY' => 'CAYMAN ISLANDS', 'CF' => 'CENTRAL AFRICAN REPUBLIC', 'TD' => 'CHAD', 'CL' => 'CHILE', 'CN' => 'CHINA', 
    'CX' => 'CHRISTMAS ISLAND', 'CC' => 'COCOS (KEELING) ISLANDS', 'CO' => 'COLOMBIA', 'KM' => 'COMOROS', 'CG' => 'CONGO',
    'CD' => 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'CK' => 'COOK ISLANDS', 'CR' => 'COSTA RICA', 'CI' => 'COTE D IVOIRE', 
    'HR' => 'CROATIA', 'CU' => 'CUBA', 'CY' => 'CYPRUS', 'CZ' => 'CZECH REPUBLIC', 'DK' => 'DENMARK', 'DJ' => 'DJIBOUTI',
    'DM' => 'DOMINICA', 'DO' => 'DOMINICAN REPUBLIC', 'TP' => 'EAST TIMOR', 'EC' => 'ECUADOR', 'EG' => 'EGYPT', 
    'SV' => 'EL SALVADOR', 'GQ' => 'EQUATORIAL GUINEA', 'ER' => 'ERITREA', 'EE' => 'ESTONIA', 'ET' => 'ETHIOPIA', 
    'FK' => 'FALKLAND ISLANDS (MALVINAS)', 'FO' => 'FAROE ISLANDS', 'FJ' => 'FIJI', 'FI' => 'FINLAND', 'FR' => 'FRANCE', 
    'GF' => 'FRENCH GUIANA', 'PF' => 'FRENCH POLYNESIA', 'TF' => 'FRENCH SOUTHERN TERRITORIES', 'GA' => 'GABON', 'GM' => 'GAMBIA', 
    'GE' => 'GEORGIA', 'DE' => 'GERMANY', 'GH' => 'GHANA', 'GI' => 'GIBRALTAR', 'GR' => 'GREECE', 'GL' => 'GREENLAND', 
    'GD' => 'GRENADA', 'GP' => 'GUADELOUPE', 'GU' => 'GUAM', 'GT' => 'GUATEMALA', 'GN' => 'GUINEA', 'GW' => 'GUINEA-BISSAU',
    'GY' => 'GUYANA', 'HT' => 'HAITI', 'HM' => 'HEARD ISLAND AND MCDONALD ISLANDS', 'VA' => 'HOLY SEE (VATICAN CITY STATE)', 
    'HN' => 'HONDURAS', 'HK' => 'HONG KONG', 'HU' => 'HUNGARY', 'IS' => 'ICELAND', 'IN' => 'INDIA', 'ID' => 'INDONESIA',
    'IR' => 'IRAN, ISLAMIC REPUBLIC OF', 'IQ' => 'IRAQ', 'IE' => 'IRELAND', 'IL' => 'ISRAEL', 'IT' => 'ITALY', 'JM' => 'JAMAICA',
    'JP' => 'JAPAN', 'JO' => 'JORDAN', 'KZ' => 'KAZAKSTAN', 'KE' => 'KENYA', 'KI' => 'KIRIBATI', 'KP' => 'KOREA DEMOCRATIC PEOPLES REPUBLIC OF', 'KR' => 'KOREA REPUBLIC OF', 'KW' => 'KUWAIT', 'KG' => 'KYRGYZSTAN', 'LA' => 'LAO PEOPLES DEMOCRATIC REPUBLIC', 'LV' => 'LATVIA', 'LB' => 'LEBANON', 'LS' => 'LESOTHO', 'LR' => 'LIBERIA', 'LY' => 'LIBYAN ARAB JAMAHIRIYA', 'LI' => 'LIECHTENSTEIN', 'LT' => 'LITHUANIA',
    'LU' => 'LUXEMBOURG', 'MO' => 'MACAU', 'MK' => 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'MG' => 'MADAGASCAR',
    'MW' => 'MALAWI', 'MY' => 'MALAYSIA', 'MV' => 'MALDIVES', 'ML' => 'MALI', 'MT' => 'MALTA', 'MH' => 'MARSHALL ISLANDS', 
    'MQ' => 'MARTINIQUE', 'MR' => 'MAURITANIA', 'MU' => 'MAURITIUS', 'YT' => 'MAYOTTE', 'MX' => 'MEXICO', 'FM' => 'MICRONESIA, FEDERATED STATES OF',
    'MD' => 'MOLDOVA, REPUBLIC OF', 'MC' => 'MONACO', 'MN' => 'MONGOLIA', 'MS' => 'MONTSERRAT', 'MA' => 'MOROCCO', 'MZ' => 'MOZAMBIQUE', 
    'MM' => 'MYANMAR', 'NA' => 'NAMIBIA', 'NR' => 'NAURU', 'NP' => 'NEPAL', 'NL' => 'NETHERLANDS', 'AN' => 'NETHERLANDS ANTILLES',
    'NC' => 'NEW CALEDONIA', 'NZ' => 'NEW ZEALAND', 'NI' => 'NICARAGUA', 'NE' => 'NIGER', 'NG' => 'NIGERIA', 'NU' => 'NIUE', 
    'NF' => 'NORFOLK ISLAND', 'MP' => 'NORTHERN MARIANA ISLANDS', 'NO' => 'NORWAY', 'OM' => 'OMAN', 'PK' => 'PAKISTAN',
    'PW' => 'PALAU', 'PS' => 'PALESTINIAN TERRITORY, OCCUPIED', 'PA' => 'PANAMA', 'PG' => 'PAPUA NEW GUINEA', 'PY' => 'PARAGUAY', 
    'PE' => 'PERU', 'PH' => 'PHILIPPINES', 'PN' => 'PITCAIRN', 'PL' => 'POLAND', 'PT' => 'PORTUGAL', 'PR' => 'PUERTO RICO',
    'QA' => 'QATAR', 'RE' => 'REUNION', 'RO' => 'ROMANIA', 'RU' => 'RUSSIAN FEDERATION', 'RW' => 'RWANDA', 'SH' => 'SAINT HELENA', 
    'KN' => 'SAINT KITTS AND NEVIS', 'LC' => 'SAINT LUCIA', 'PM' => 'SAINT PIERRE AND MIQUELON', 'VC' => 'SAINT VINCENT AND THE GRENADINES', 'WS' => 'SAMOA', 
    'SM' => 'SAN MARINO', 'ST' => 'SAO TOME AND PRINCIPE', 'SA' => 'SAUDI ARABIA', 'SN' => 'SENEGAL', 'SC' => 'SEYCHELLES', 
    'SL' => 'SIERRA LEONE', 'SG' => 'SINGAPORE', 'SK' => 'SLOVAKIA', 'SI' => 'SLOVENIA', 'SB' => 'SOLOMON ISLANDS', 'SO' => 'SOMALIA',
    'ZA' => 'SOUTH AFRICA', 'GS' => 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'ES' => 'SPAIN', 'LK' => 'SRI LANKA',
    'SD' => 'SUDAN', 'SR' => 'SURINAME', 'SJ' => 'SVALBARD AND JAN MAYEN', 'SZ' => 'SWAZILAND', 'SE' => 'SWEDEN', 'CH' => 'SWITZERLAND',
    'SY' => 'SYRIAN ARAB REPUBLIC', 'TW' => 'TAIWAN, PROVINCE OF CHINA', 'TJ' => 'TAJIKISTAN', 'TZ' => 'TANZANIA, UNITED REPUBLIC OF',
    'TH' => 'THAILAND', 'TG' => 'TOGO', 'TK' => 'TOKELAU', 'TO' => 'TONGA', 'TT' => 'TRINIDAD AND TOBAGO', 'TN' => 'TUNISIA',
    'TR' => 'TURKEY', 'TM' => 'TURKMENISTAN', 'TC' => 'TURKS AND CAICOS ISLANDS', 'TV' => 'TUVALU', 'UG' => 'UGANDA', 'UA' => 'UKRAINE',
    'AE' => 'UNITED ARAB EMIRATES', 'GB' => 'UNITED KINGDOM', 'US' => 'UNITED STATES', 'UM' => 'UNITED STATES MINOR OUTLYING ISLANDS',
    'UY' => 'URUGUAY', 'UZ' => 'UZBEKISTAN', 'VU' => 'VANUATU', 'VE' => 'VENEZUELA', 'VN' => 'VIET NAM',
    'VG' => 'VIRGIN ISLANDS, BRITISH', 'VI' => 'VIRGIN ISLANDS, U.S.', 'WF' => 'WALLIS AND FUTUNA', 'EH' => 'WESTERN SAHARA', 
    'YE' => 'YEMEN', 'YU' => 'YUGOSLAVIA', 'ZM' => 'ZAMBIA', 'ZW' => 'ZIMBABWE');

//save into the database.
update_option('itexc_country_list',$countries_list); 
//******************************************* Country list END ************

?>
