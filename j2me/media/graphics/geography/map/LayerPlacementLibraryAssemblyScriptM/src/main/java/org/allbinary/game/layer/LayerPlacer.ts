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
// package org.allbinary.game.layer
// import java.util.Enumeration
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.LayerInterfaceFactory
// import org.allbinary.layer.LayerInterfaceVisitor
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.EnumerationUtil

@global export class LayerPlacer extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.LayerPlacer";
    }
    enumerationUtil: EnumerationUtil | null = null;
    layerInterfaceVisitor: LayerInterfaceVisitor | null = null;
    dimension: GPoint | null = null;

    jfields_LayerPlacer(): void {
    this.enumerationUtil = EnumerationUtil.getInstance();
    
    
    }
    

    jinit_LayerPlacer_2(layerInterfaceVisitor: LayerInterfaceVisitor | null, dimension: GPoint | null): LayerPlacer {
        super.jinit_JObject_0();
        this.jfields_LayerPlacer();
        this.layerInterfaceVisitor = layerInterfaceVisitor;
        this.dimension = dimension;
        return this;
    }
    

    processList(list: BasicArrayList | null): void {
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        let layerPlacementInterface: LayerPlacementInterface | null = null;
        for (let index: i32 = 0; index < size; index++) {
            layerPlacementInterface = changetype<LayerPlacementInterface | null>(list!.objectArray![index]);
            this.process(layerPlacementInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    process(layerPlacementInterface: LayerPlacementInterface | null): void {
        let relativePoint: GPoint | null = this.getPoint(layerPlacementInterface); if (JThrowable.pending !== null) return;
        let layerInterfaceFactory: LayerInterfaceFactory | null = LayerInterfaceFactory.getInstance(); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = layerPlacementInterface!.getInstance(); if (JThrowable.pending !== null) return;
        let enumeration: JEnumeration | null = hashtable!.keys(); if (JThrowable.pending !== null) return;
        let point: GPoint | null = null;
        let layerHashtable: ABHashtable | null = null;
        let x: i32 = 0;
        let y: i32 = 0;
        let z: i32 = 0;
        let layerInterface: AllBinaryLayer | null = null;
        while (this.enumerationUtil!.hasMoreElements(enumeration)) {
            point = changetype<GPoint | null>(this.enumerationUtil!.nextElement(enumeration)); if (JThrowable.pending !== null) return;
            layerHashtable = changetype<ABHashtable | null>(hashtable!.get(point)); if (JThrowable.pending !== null) return;
            x = point!.getX() + relativePoint!.getX(); if (JThrowable.pending !== null) return;
            y = point!.getY() + relativePoint!.getY(); if (JThrowable.pending !== null) return;
            z = point!.getZ() + relativePoint!.getZ(); if (JThrowable.pending !== null) return;
            layerInterface = layerInterfaceFactory!.getNexInstance(layerHashtable, x, y, z); if (JThrowable.pending !== null) return;
            this.layerInterfaceVisitor!.visit(layerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getPoint(layerPlacementInterface: LayerPlacementInterface | null): GPoint | null {
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let layerPlacementType: LayerPlacementType | null = layerPlacementInterface!.getLayerType(); if (JThrowable.pending !== null) return null;
        if (layerPlacementType == LayerPlacementTypeFactory.getInstance()!.MAP) {
            let width: i32 = layerPlacementInterface!.getWidth(); if (JThrowable.pending !== null) return null;
            let height: i32 = layerPlacementInterface!.getHeight(); if (JThrowable.pending !== null) return null;
            let x: i32 = ((this.dimension!.getX() - width) / 2); if (JThrowable.pending !== null) return null;
            let y: i32 = ((this.dimension!.getY() - height) / 2); if (JThrowable.pending !== null) return null;
            return pointFactory!.createXY(x, y);
        } else if (layerPlacementType == LayerPlacementTypeFactory.getInstance()!.UP) {
            let width: i32 = layerPlacementInterface!.getWidth(); if (JThrowable.pending !== null) return null;
            let height: i32 = layerPlacementInterface!.getHeight(); if (JThrowable.pending !== null) return null;
            let x: i32 = ((this.dimension!.getX() - width) / 2); if (JThrowable.pending !== null) return null;
            let y: i32 = -height;
            return pointFactory!.createXY(x, y);
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("PlacementType Not Recognized")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

