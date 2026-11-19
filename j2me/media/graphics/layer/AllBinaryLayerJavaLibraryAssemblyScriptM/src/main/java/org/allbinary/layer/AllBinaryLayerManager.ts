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
// package org.allbinary.layer
// import org.allbinary.layer.event.LayerManagerEvent
// import org.allbinary.layer.event.LayerManagerEventHandler

@global export class AllBinaryLayerManager extends LayerManager {

    jclassName(): string {
        return "org.allbinary.layer.AllBinaryLayerManager";
    }
    layerManagerEventHandler: LayerManagerEventHandler | null = null;
    createLayerManagerEvent: LayerManagerEvent | null = null;
    deleteLayerManagerEvent: LayerManagerEvent | null = null;
    basicLayerProcessorArray: StaticArray<LayerProcessor | null> | null = null;

    jfields_AllBinaryLayerManager(): void {
    this.layerManagerEventHandler = LayerManagerEventHandler.getInstance();
    this.createLayerManagerEvent = new LayerManagerEvent().jinit_LayerManagerEvent_2(this, this.layerManagerEventHandler!.CREATE);
    this.deleteLayerManagerEvent = new LayerManagerEvent().jinit_LayerManagerEvent_2(this, this.layerManagerEventHandler!.DELETE);
    this.basicLayerProcessorArray = new StaticArray<LayerProcessor | null>(0);
    }
    

    jinit_AllBinaryLayerManager_0(): AllBinaryLayerManager {
        super.jinit_LayerManager_1(LayerManagerNoDebug.getInstance());
        this.jfields_AllBinaryLayerManager();
        return this;
    }
    

    getLayerProcessorArray(): StaticArray<LayerProcessor | null> | null {
        return this.basicLayerProcessorArray;
    }
    

    setLayerProcessorArray(layerProcessorArray: StaticArray<LayerProcessor | null> | null): void {
        this.basicLayerProcessorArray = layerProcessorArray;
    }
    

    log(): void {
        let size: i32 = this.basicLayerProcessorArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            let layerProcessorInterface: LayerProcessor | null = this.basicLayerProcessorArray![index];
        }
    }
    

    append(layerInterface: AllBinaryLayer | null): void {
        if (!this.contains(layerInterface)) {
            this.appendProcessors(layerInterface); if (JThrowable.pending !== null) return;
            super.append(layerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    appendAt(layerInterface: AllBinaryLayer | null, index: i32): void {
        if (!this.contains(layerInterface)) {
            this.appendProcessors(layerInterface); if (JThrowable.pending !== null) return;
            super.appendAt(layerInterface, index); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    appendProcessors(layerInterface: AllBinaryLayer | null): void {
        this.createLayerManagerEvent!.setLayerInterface(layerInterface); if (JThrowable.pending !== null) return;
        this.layerManagerEventHandler!.fireEvent(this.createLayerManagerEvent); if (JThrowable.pending !== null) return;
        let layerProcessorInterface: LayerProcessor | null = null;
        for (let index: i32 = this.basicLayerProcessorArray!.length; --index >= 0; ) {
            layerProcessorInterface = this.basicLayerProcessorArray![index];
            if (layerProcessorInterface!.isProcessorLayer(layerInterface)) {
                layerProcessorInterface!.getLayerManager()!.append(layerInterface); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    remove(layerInterface: AllBinaryLayer | null): void {
        this.deleteLayerManagerEvent!.setLayerInterface(layerInterface); if (JThrowable.pending !== null) return;
        this.layerManagerEventHandler!.fireDeleteEvent(this.deleteLayerManagerEvent); if (JThrowable.pending !== null) return;
        let layerProcessorInterface: LayerProcessor | null = null;
        for (let index: i32 = this.basicLayerProcessorArray!.length; --index >= 0; ) {
            layerProcessorInterface = this.basicLayerProcessorArray![index];
            layerProcessorInterface!.getLayerManager()!.remove(layerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.remove(layerInterface); if (JThrowable.pending !== null) return;
    }
    

    process(): void {
        let layerProcessorInterface: LayerProcessor | null = null;
        let size: i32 = this.basicLayerProcessorArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            layerProcessorInterface = this.basicLayerProcessorArray![index];
            layerProcessorInterface!.process(this); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    cleanup(): void {
        let layerProcessorInterface: LayerProcessor | null = null;
        let size: i32 = this.basicLayerProcessorArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            layerProcessorInterface = this.basicLayerProcessorArray![index];
            layerProcessorInterface!.getLayerManager()!.cleanup(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.cleanup(); if (JThrowable.pending !== null) return;
    }
}

