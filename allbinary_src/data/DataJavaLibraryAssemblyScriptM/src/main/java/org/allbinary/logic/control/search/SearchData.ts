/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.logic.control.search

@global export class SearchData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.control.search.SearchData";
    }
    @lazy static readonly TOTAL_NUMBER_PAGES: string | null = "SEARCHDATA_TOTALNUMBEROFPAGES";
    @lazy static readonly TOTAL_NUMBER_ITEMS_ON_THIS_PAGE: string | null = "SEARCHDATA_TOTALNUMBEROFITEMSONTHISPAGE";
    @lazy static readonly TOTAL_NUMBER_ITEMS: string | null = "SEARCHDATA_TOTALNUMBEROFITEMS";
    static readonly DEFAULT_PAGE_LENGTH: i32 = 10;
    @lazy static readonly GENERATESTATICPAGES: string | null = "Generate Static Pages";
    @lazy static readonly SEARCHBYSUMMARY: string | null = "Search By Summary";
    @lazy static readonly SEARCHBYDESCRIPTION: string | null = "Search By Description";
    @lazy static readonly SEARCHBYCATEGORY: string | null = "Search By Category";
    @lazy static readonly SEARCHCATEGORIES: string | null = "Search Categories";
    @lazy static readonly FILENAME: string | null = "SEARCHDATA_BASEFILENAME";
    @lazy static readonly COLUMNNAME: string | null = "COLUMN_NAME";
    @lazy static readonly COLUMNVALUE: string | null = "COLUMN_VALUE";
    @lazy static readonly PARAMS: string | null = "SEARCHDATA_PARAMS";
    @lazy static readonly LENGTH: string | null = "SEARCHDATA_LENGTH";
    @lazy static readonly ORDER: string | null = "SEARCHDATA_ORDER";
    @lazy static readonly PAGE: string | null = "SEARCHDATA_PAGE";
    @lazy static readonly FIELDS: string | null = "SEARCHDATA_FIELDS";
    @lazy static readonly FIELD: string | null = "SEARCHDATA_FIELD";
    @lazy static readonly SORTBY: string | null = "SEARCHDATA_SORTBY";
    @lazy static readonly TYPE: string | null = "SEARCHDATA_TYPE";
    @lazy static readonly PAGE_INFO: string | null = "pageInfo";
    @lazy static readonly SEARCH: string | null = "search";
    @lazy static readonly MAKEPUBLIC: string | null = "Make Public";
    

    jinit_SearchData_0(): SearchData {
        super.jinit_JObject_0();
        return this;
    }
}

