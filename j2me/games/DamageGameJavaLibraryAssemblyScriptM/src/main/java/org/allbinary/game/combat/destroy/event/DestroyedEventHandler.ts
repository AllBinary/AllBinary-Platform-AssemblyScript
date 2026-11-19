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
// package org.allbinary.game.combat.destroy.event
// import org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class DestroyedEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.combat.destroy.event.DestroyedEventHandler";
    }
    @lazy static jv_instance: DestroyedEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DestroyedEventHandler | null {
        if (!DestroyedEventHandler.js_instance) {
            DestroyedEventHandler.js_instance = true;
            DestroyedEventHandler.jv_instance = new DestroyedEventHandler().jinit_DestroyedEventHandler_0();
        }
        return DestroyedEventHandler.jv_instance;
    }
    static set instance(value: DestroyedEventHandler | null) {
        DestroyedEventHandler.js_instance = true;
        DestroyedEventHandler.jv_instance = value;
    }
    list: BasicArrayList | null = null;

    jfields_DestroyedEventHandler(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): DestroyedEventHandler | null {
        return DestroyedEventHandler.instance;
    }
    

    jinit_DestroyedEventHandler_0(): DestroyedEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_DestroyedEventHandler();
        return this;
    }
    

    addListener(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null): void {
        if (!this.list!.contains(collidableDestroyableDamageableLayer)) {
            this.list!.add(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeAllListeners(): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
        super.removeAllListeners(); if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        this.list!.remove(eventListenerInterface); if (JThrowable.pending !== null) return;
        super.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    fireEvent(eventObject: AllBinaryEventObject | null): void {
        for (let index: i32 = this.list!.size(); --index >= 0; ) {
            do {
                let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(this.list!.objectArray![index]);
                collidableDestroyableDamageableLayer!.onDestroyed(changetype<DestroyedEvent | null>(eventObject)); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, EventStrings.getInstance()!.FIRE_EVENT, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.fireEvent(eventObject); if (JThrowable.pending !== null) return;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let destroyedEventListenerInterface: DestroyedEventListenerInterface | null = changetype<DestroyedEventListenerInterface | null>(eventListenerInterface);
        destroyedEventListenerInterface!.onDestroyed(changetype<DestroyedEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

