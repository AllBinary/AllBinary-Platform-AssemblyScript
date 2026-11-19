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
// package org.allbinary.game.ag.layer.weapon.mine
// import org.allbinary.game.layer.resources.BasicGameResources
// import org.allbinary.logic.NullUtil

@global export class MineWeaponResources extends BasicGameResources {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.weapon.mine.MineWeaponResources";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!MineWeaponResources.js_instance) {
            MineWeaponResources.js_instance = true;
            MineWeaponResources.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return MineWeaponResources.jv_instance;
    }
    static set instance(value: Object | null) {
        MineWeaponResources.js_instance = true;
        MineWeaponResources.jv_instance = value;
    }
    DROP_TEXT_RESOURCE: string | null = null;
    DROP_RESOURCE: string | null = null;
    DROP_ICON_RESOURCE: string | null = null;

    jfields_MineWeaponResources(): void {
    this.DROP_TEXT_RESOURCE = "/mine_drop_text_20_by_20.png";
    this.DROP_RESOURCE = "/mine_drop_20_by_20.png";
    this.DROP_ICON_RESOURCE = "/mine_drop_icon_20_by_20.png";
    }
    

    static getInstance(): MineWeaponResources | null {
        if (MineWeaponResources.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            MineWeaponResources.instance = new MineWeaponResources().jinit_MineWeaponResources_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<MineWeaponResources | null>(MineWeaponResources.instance);
    }
    

    jinit_MineWeaponResources_0(): MineWeaponResources {
        super.jinit_BasicGameResources_0();
        this.jfields_MineWeaponResources();
        let ROOT: string | null = "/mine";
        let SMALL: string | null = "_20_by_20.png";
        let MEDIUM: string | null = SMALL;
        let SIZE_FOUR: string | null = SMALL;
        let SIZE_FIVE: string | null = SMALL;
        let SIZE_SIX: string | null = SMALL;
        let SIZE: StaticArray<string | null> | null = StaticArray.fromArray<string | null>([SMALL, MEDIUM, SIZE_FOUR, SIZE_FIVE, SIZE_SIX]);
        super.init(ROOT, SIZE); if (JThrowable.pending !== null) return this;
        return this;
    }
}

