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
// package org.allbinary.business.user.commerce.inventory.basket

@global export class BasketData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.user.commerce.inventory.basket.BasketData";
    }
    @lazy static readonly BASKET: string | null = "BASKET";
    @lazy static readonly NAME: string | null = "NAME";
    @lazy static readonly BASKETREVIEW: string | null = "BASKET_REVIEW";
    @lazy static readonly TOTALWEIGHT: string | null = "BASKET_TOTALWEIGTH";
    @lazy static readonly ITEMTOTAL: string | null = "BASKET_ITEMTOTAL";
    @lazy static readonly ITEMTOTALINBASKET: string | null = "BASKET_ITEMTOTALINBASKET";
    @lazy static readonly SUBTOTAL: string | null = "BASKET_SUBTOTAL";
    @lazy static readonly ISEMPTY: string | null = "BASKET_ISEMPTY";
    @lazy static readonly INSERT: string | null = "BASKET_INSERT";
    @lazy static readonly DELETE: string | null = "BASKET_DELETE";
    @lazy static readonly ADJUST: string | null = "BASKET_ADJUST";
    

    jinit_BasketData_0(): BasketData {
        super.jinit_JObject_0();
        return this;
    }
}

