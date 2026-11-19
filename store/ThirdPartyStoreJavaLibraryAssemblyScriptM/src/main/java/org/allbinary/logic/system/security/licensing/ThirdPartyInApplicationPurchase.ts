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
// package org.allbinary.logic.system.security.licensing
// import org.allbinary.logic.string.StringUtil

@global export class ThirdPartyInApplicationPurchase extends JObject implements ThirdPartyInApplicationPurchaseInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.ThirdPartyInApplicationPurchase";
    }

    jinit_ThirdPartyInApplicationPurchase_0(): ThirdPartyInApplicationPurchase {
        super.jinit_JObject_0();
        return this;
    }
    

    isPurchased(lockableFeature: LockableFeature | null): bool {
        return false;
    }
    

    onCreate(anyType: Object | null, stateObject: Object | null): void {
    }
    

    onDestroy(): void {
    }
    

    onStart(): void {
    }
    

    onActivityResult(requestCode: i32, resultCode: i32, dataObject: Object | null): void {
    }
    

    onSaveInstanceState(anyType: Object | null): void {
    }
    

    onStop(): void {
    }
    

    requestPurchase(lockableFeature: LockableFeature | null): void {
    }
    

    requestReceipts(): void {
    }
    

    add(lockableFeature: LockableFeature | null): void {
    }
    

    getUserName(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    isEnabled(): bool {
        return false;
    }
    

    requestProducts(): void {
    }
}

