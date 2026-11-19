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
// package org.allbinary.business.advertisement
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.logic.system.security.licensing.LockedUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class Advertisements extends JObject {

    jclassName(): string {
        return "org.allbinary.business.advertisement.Advertisements";
    }
    bannerList: BasicArrayList | null = null;
    pageList: BasicArrayList | null = null;
    myRandomFactory: MyRandomFactory | null = null;

    jfields_Advertisements(): void {
    this.bannerList = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.pageList = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.myRandomFactory = MyRandomFactory.getInstance();
    }

    jinit_Advertisements_0(): Advertisements {
        super.jinit_JObject_0();
        this.jfields_Advertisements();
        return this;
    }
    

    addPage(advertisementProcessorInterface: AdvertisementProcessorInterface | null): void {
        if (!this.pageList!.contains(advertisementProcessorInterface)) {
            this.pageList!.add(advertisementProcessorInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    startRandomPage(): void {
        let size: i32 = this.pageList!.size(); if (JThrowable.pending !== null) return;
        if (size > 0) {
            let random: i32 = this.myRandomFactory!.getAbsoluteNextInt(size); if (JThrowable.pending !== null) return;
            let advertisementProcessorInterface: AdvertisementProcessorInterface | null = changetype<AdvertisementProcessorInterface | null>(this.pageList!.objectArray![random]);
            advertisementProcessorInterface!.start(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processRandomPage(): void {
        if (LockedUtil.getInstance()!.isLocked()) {
            let size: i32 = this.pageList!.size(); if (JThrowable.pending !== null) return;
            if (size > 0) {
                let random: i32 = this.myRandomFactory!.getAbsoluteNextInt(size); if (JThrowable.pending !== null) return;
                let advertisementProcessorInterface: AdvertisementProcessorInterface | null = changetype<AdvertisementProcessorInterface | null>(this.pageList!.objectArray![random]);
                advertisementProcessorInterface!.process(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    stopAllPage(): void {
        for (let index: i32 = this.pageList!.size(); --index >= 0; ) {
            let advertisementProcessorInterface: AdvertisementProcessorInterface | null = changetype<AdvertisementProcessorInterface | null>(this.pageList!.objectArray![index]);
            advertisementProcessorInterface!.stop(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addBanner(advertisementProcessorInterface: AdvertisementProcessorInterface | null): void {
        if (!this.bannerList!.contains(advertisementProcessorInterface)) {
            this.bannerList!.add(advertisementProcessorInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    startAll(): void {
        for (let index: i32 = this.bannerList!.size(); --index >= 0; ) {
            let advertisementProcessorInterface: AdvertisementProcessorInterface | null = changetype<AdvertisementProcessorInterface | null>(this.bannerList!.objectArray![index]);
            advertisementProcessorInterface!.start(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    stopAllBanner(): void {
        for (let index: i32 = this.bannerList!.size(); --index >= 0; ) {
            let advertisementProcessorInterface: AdvertisementProcessorInterface | null = changetype<AdvertisementProcessorInterface | null>(this.bannerList!.objectArray![index]);
            advertisementProcessorInterface!.stop(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getBanner(index: i32): AdvertisementProcessorInterface | null {
        let advertisementProcessorInterface: AdvertisementProcessorInterface | null = changetype<AdvertisementProcessorInterface | null>(this.bannerList!.objectArray![index]);
        return advertisementProcessorInterface;
    }
    

    stopAll(): void {
        this.stopAllBanner(); if (JThrowable.pending !== null) return;
        this.stopAllPage(); if (JThrowable.pending !== null) return;
    }
}

