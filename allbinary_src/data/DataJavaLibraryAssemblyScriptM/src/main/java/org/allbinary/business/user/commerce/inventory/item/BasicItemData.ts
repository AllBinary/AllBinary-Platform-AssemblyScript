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
// package org.allbinary.business.user.commerce.inventory.item

@global export class BasicItemData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.inventory.item.BasicItemData";
    }
    @lazy static jv_instance: BasicItemData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicItemData | null {
        if (!BasicItemData.js_instance) {
            BasicItemData.js_instance = true;
            BasicItemData.jv_instance = new BasicItemData().jinit_BasicItemData_0();
        }
        return BasicItemData.jv_instance;
    }
    static set instance(value: BasicItemData | null) {
        BasicItemData.js_instance = true;
        BasicItemData.jv_instance = value;
    }
    ITEM: string | null = null;
    TOTAL: string | null = null;
    ID: string | null = null;
    NUMBER: string | null = null;
    INBASKETS: string | null = null;
    WEIGHT: string | null = null;
    NEWORUSED: string | null = null;
    SUMMARY: string | null = null;
    DISTRIBUTOR: string | null = null;
    IDUSEDBYDISTRIBUTOR: string | null = null;
    PRODUCEDBY: string | null = null;
    PRODUCTIONDATE: string | null = null;
    STARTPRODUCTIONDATE: string | null = null;
    DESCRIPTION: string | null = null;
    KEYWORDS: string | null = null;
    CATEGORY: string | null = null;
    TYPE: string | null = null;
    IMAGE: string | null = null;
    SMALLIMAGE: string | null = null;
    MEDIUMIMAGE: string | null = null;
    LARGEIMAGE: string | null = null;
    PRICE: string | null = null;
    COMMENT: string | null = null;
    CUSTOMS: string | null = null;
    DOWNLOADS: string | null = null;
    GROUPS: string | null = null;
    OPTIONS: string | null = null;
    PERMISSIONS: string | null = null;
    SPECIALS: string | null = null;

    jfields_BasicItemData(): void {
    this.ITEM = "BASICITEM";
    this.TOTAL = "BASICITEM_TOTAL";
    this.ID = "BASICITEM_ID";
    this.NUMBER = "BASICITEM_NUMBER";
    this.INBASKETS = "BASICITEM_IN_BASKETS";
    this.WEIGHT = "BASICITEM_WEIGHT";
    this.NEWORUSED = "BASICITEM_NEW_OR_USED";
    this.SUMMARY = "BASICITEM_SUMMARY";
    this.DISTRIBUTOR = "BASICITEM_DISTRIBUTOR";
    this.IDUSEDBYDISTRIBUTOR = "BASICITEM_IDUSEDBYDISTRIBUTOR";
    this.PRODUCEDBY = "BASICITEM_PRODUCEDBY";
    this.PRODUCTIONDATE = "BASICITEM_PRODUCTIONDATE";
    this.STARTPRODUCTIONDATE = "BASICITEM_STARTPRODUCTIONDATE";
    this.DESCRIPTION = "BASICITEM_DESCRIPTION";
    this.KEYWORDS = "BASICITEM_KEYWORDS";
    this.CATEGORY = "BASICITEM_CATEGORY";
    this.TYPE = "BASICITEM_TYPE";
    this.IMAGE = "BASICITEM_IMG";
    this.SMALLIMAGE = "BASICITEM_SMALL_IMG";
    this.MEDIUMIMAGE = "BASICITEM_MEDIUM_IMG";
    this.LARGEIMAGE = "BASICITEM_LARGE_IMG";
    this.PRICE = "BASICITEM_PRICE";
    this.COMMENT = "BASICITEM_COMMENT";
    this.CUSTOMS = "BASICITEM_CUSTOMS";
    this.DOWNLOADS = "BASICITEM_DOWNLOADS";
    this.GROUPS = "BASICITEM_GROUPS";
    this.OPTIONS = "BASICITEM_OPTIONS";
    this.PERMISSIONS = "BASICITEM_PERMISSIONS";
    this.SPECIALS = "BASICITEM_SPECIALS";
    }

    jinit_BasicItemData_0(): BasicItemData {
        super.jinit_JObject_0();
        this.jfields_BasicItemData();
        return this;
    }
    

    static getInstance(): BasicItemData | null {
        return BasicItemData.instance;
    }
}

