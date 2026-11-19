/*
 * 
 * To change this license header, choose License Headers in Project Properties. 
 * To change this template file, choose Tools | Templates 
 * and open the template in the editor.  
 */
// Generated Code Do Not Modify
// package org.allbinary.logic.system.security.licensing
// import org.allbinary.logic.string.StringUtil

@global export class InApplicationPurchaseFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.InApplicationPurchaseFactory";
    }
    @lazy static jv_instance: InApplicationPurchaseFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InApplicationPurchaseFactory | null {
        if (!InApplicationPurchaseFactory.js_instance) {
            InApplicationPurchaseFactory.js_instance = true;
            InApplicationPurchaseFactory.jv_instance = new InApplicationPurchaseFactory().jinit_InApplicationPurchaseFactory_0();
        }
        return InApplicationPurchaseFactory.jv_instance;
    }
    static set instance(value: InApplicationPurchaseFactory | null) {
        InApplicationPurchaseFactory.js_instance = true;
        InApplicationPurchaseFactory.jv_instance = value;
    }
    

    static getInstance(): InApplicationPurchaseFactory | null {
        return InApplicationPurchaseFactory.instance;
    }
    

    jinit_InApplicationPurchaseFactory_0(): InApplicationPurchaseFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    init(anyType: Object | null, stateObject: Object | null): void {
    }
    

    onCreate(anyType: Object | null, stateObject: Object | null): void {
    }
    

    onStart(): void {
    }
    

    onResult(requestCode: i32, resultCode: i32, data: Object | null): void {
    }
    

    onSaveState(anyType: Object | null): void {
    }
    

    onStop(): void {
    }
    

    onDestroy(): void {
    }
    

    purchase(lockableFeature: LockableFeature | null): void {
    }
    

    isPurchased(lockableFeature: LockableFeature | null): bool {
        return true;
    }
    

    add(lockableFeature: LockableFeature | null): void {
    }
    

    getUserName(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    isEnabled(): bool {
        return false;
    }
}

