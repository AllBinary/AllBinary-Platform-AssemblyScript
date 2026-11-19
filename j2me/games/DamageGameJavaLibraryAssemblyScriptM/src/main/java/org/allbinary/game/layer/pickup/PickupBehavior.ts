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
// package org.allbinary.game.layer.pickup
// import org.allbinary.game.health.HealthInterfaceCompositeInterface
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer
// import org.allbinary.game.part.CountedLayerInterfaceFactoryPart
// import org.allbinary.game.part.PartInterface
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings

@global export class PickupBehavior extends JObject implements PickupBehaviorInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.PickupBehavior";
    }
    @lazy static jv_NULL_PICKUP_BEHAVIOR: Object | null = null;
    @lazy static js_NULL_PICKUP_BEHAVIOR: bool = false;
    static get NULL_PICKUP_BEHAVIOR(): Object | null {
        if (!PickupBehavior.js_NULL_PICKUP_BEHAVIOR) {
            PickupBehavior.js_NULL_PICKUP_BEHAVIOR = true;
            PickupBehavior.jv_NULL_PICKUP_BEHAVIOR = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return PickupBehavior.jv_NULL_PICKUP_BEHAVIOR;
    }
    static set NULL_PICKUP_BEHAVIOR(value: Object | null) {
        PickupBehavior.js_NULL_PICKUP_BEHAVIOR = true;
        PickupBehavior.jv_NULL_PICKUP_BEHAVIOR = value;
    }
    logUtil: LogUtil | null = null;
    countedIndex: i32 = 0;
    ownerLayerInterface: CollidableCompositeLayer | null = null;

    jfields_PickupBehavior(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    }
    

    static getNullInstance(): PickupBehavior | null {
        if (PickupBehavior.NULL_PICKUP_BEHAVIOR == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            PickupBehavior.NULL_PICKUP_BEHAVIOR = new PickupBehavior().jinit_PickupBehavior_2(CollidableCompositeLayer.getNullInstance(), 0); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<PickupBehavior | null>(PickupBehavior.NULL_PICKUP_BEHAVIOR);
    }
    

    jinit_PickupBehavior_2(ownerLayerInterface: CollidableCompositeLayer | null, countedIndex: i32): PickupBehavior {
        super.jinit_JObject_0();
        this.jfields_PickupBehavior();
        this.ownerLayerInterface = ownerLayerInterface;
        this.countedIndex = countedIndex;
        return this;
    }
    

    doPickup(pickupProcessorInterface: PickupProcessorInterface | null): void {
        do {
            let healthInterfaceCompositeInterface: HealthInterfaceCompositeInterface | null = changetype<HealthInterfaceCompositeInterface | null>(this.ownerLayerInterface);
            if (healthInterfaceCompositeInterface!.getHealthInterface()!.isAlive()) {
                pickupProcessorInterface!.process(this.ownerLayerInterface); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "doPickup", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    doPickupLayer(pickupLayerInterface: PickedUpLayerInterface | null): void {
        do {
            let pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null = pickupLayerInterface!.getPickedUpLayerInterfaceFactoryInterface(); if (JThrowable.pending !== null) break;
            let pickedUpLayerType: PickedUpLayerType | null = pickedUpLayerInterfaceFactoryInterface!.getPickedUpLayerType(); if (JThrowable.pending !== null) break;
            let pickedUpLayerTypeFactory: PickedUpLayerTypeFactory | null = PickedUpLayerTypeFactory.getInstance(); if (JThrowable.pending !== null) break;
            if (pickedUpLayerType == pickedUpLayerTypeFactory!.BEAM || pickedUpLayerType == pickedUpLayerTypeFactory!.MINE || pickedUpLayerType == pickedUpLayerTypeFactory!.PROJECTILE || pickedUpLayerType == pickedUpLayerTypeFactory!.ENHANCEMENT) {
                this.add(changetype<CountedPickedUpLayerInterfaceFactoryInterface | null>(pickedUpLayerInterfaceFactoryInterface)); if (JThrowable.pending !== null) break;
            } else if (pickedUpLayerInterfaceFactoryInterface!.getPickedUpLayerType() == pickedUpLayerTypeFactory!.PART) {
                let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(this.ownerLayerInterface);
                collidableDestroyableDamageableLayer!.addPart(pickedUpLayerInterfaceFactoryInterface); if (JThrowable.pending !== null) break;
            } else if (pickedUpLayerType == pickedUpLayerTypeFactory!.NONE) {
            } else {
                let pickupProcessorInterface: PickupProcessorInterface | null = changetype<PickupProcessorInterface | null>(pickedUpLayerInterfaceFactoryInterface);
                this.doPickup(pickupProcessorInterface); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            pickupLayerInterface!.setPickedUp(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "doPickup", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    add(countedPickedUpLayerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactoryInterface | null): void {
        let partIndex: i32 = countedPickedUpLayerInterfaceFactoryInterface!.getId() + this.countedIndex; if (JThrowable.pending !== null) return;
        this.addAt(countedPickedUpLayerInterfaceFactoryInterface, partIndex); if (JThrowable.pending !== null) return;
    }
    

    addAt(countedPickedUpLayerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactoryInterface | null, partIndex: i32): void {
        let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(this.ownerLayerInterface);
        let countedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart | null = changetype<CountedLayerInterfaceFactoryPart | null>(collidableDestroyableDamageableLayer!.getPartInterfaceArray()![partIndex]); if (JThrowable.pending !== null) return;
        countedLayerInterfaceFactory!.setTotal(countedLayerInterfaceFactory!.getTotal() + countedPickedUpLayerInterfaceFactoryInterface!.getTotal()); if (JThrowable.pending !== null) return;
    }
    

    getFirstAvailableCountedLayerInterfaceFactory(pickedUpLayerTypeArray: StaticArray<PickedUpLayerType | null> | null): CountedLayerInterfaceFactoryPart | null {
        let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(this.ownerLayerInterface);
        let partInterfaceArray: StaticArray<PartInterface | null> | null = collidableDestroyableDamageableLayer!.getPartInterfaceArray(); if (JThrowable.pending !== null) return null;
        let size: i32 = partInterfaceArray!.length;
        let nextCountedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart | null = null;
        let countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory | null = null;
        for (let index: i32 = this.countedIndex; index < size; index++) {
            nextCountedLayerInterfaceFactory = changetype<CountedLayerInterfaceFactoryPart | null>(collidableDestroyableDamageableLayer!.getPartInterfaceArray()![index]); if (JThrowable.pending !== null) return null;
            countedPickedUpLayerInterfaceFactory = nextCountedLayerInterfaceFactory!.getCountedPickedUpLayerInterfaceFactory(); if (JThrowable.pending !== null) return null;
            for (let index2: i32 = pickedUpLayerTypeArray!.length; --index2 >= 0; ) {
                if (countedPickedUpLayerInterfaceFactory!.getPickedUpLayerType() == pickedUpLayerTypeArray![index2]) {
                    if (nextCountedLayerInterfaceFactory!.getTotal() > 0) {
                        return nextCountedLayerInterfaceFactory;
                    } if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return CountedLayerInterfaceFactoryPart.NULL_COUNTED_LAYER_INTERFACE_FACTORY;
    }
    

    getCountedLayerInterfaceFactoryForSlot(slotIndex: i32): CountedLayerInterfaceFactoryPart | null {
        let currentSlot: i32 = 0;
        let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(this.ownerLayerInterface);
        let partInterfaceArray: StaticArray<PartInterface | null> | null = collidableDestroyableDamageableLayer!.getPartInterfaceArray(); if (JThrowable.pending !== null) return null;
        let size: i32 = partInterfaceArray!.length;
        let nextCountedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart | null = null;
        for (let index: i32 = this.countedIndex; index < size; index++) {
            nextCountedLayerInterfaceFactory = changetype<CountedLayerInterfaceFactoryPart | null>(collidableDestroyableDamageableLayer!.getPartInterfaceArray()![index]); if (JThrowable.pending !== null) return null;
            if (nextCountedLayerInterfaceFactory!.getTotal() > 0) {
                if (currentSlot == slotIndex) {
                    return nextCountedLayerInterfaceFactory;
                } else {
                    currentSlot++;
                }
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return CountedLayerInterfaceFactoryPart.NULL_COUNTED_LAYER_INTERFACE_FACTORY;
    }
    

    getCountedIndex(): i32 {
        return this.countedIndex;
    }
}

