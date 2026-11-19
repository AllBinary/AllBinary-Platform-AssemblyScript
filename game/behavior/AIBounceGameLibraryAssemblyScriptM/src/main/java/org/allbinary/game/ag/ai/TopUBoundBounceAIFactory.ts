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
// package org.allbinary.game.ag.ai
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.bounds.TopULayerBounds
// import org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.physics.velocity.VelocityInterface
// import org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.util.ABHashtable

@global export class TopUBoundBounceAIFactory extends JObject implements ArtificialIntelligenceInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.TopUBoundBounceAIFactory";
    }

    jinit_TopUBoundBounceAIFactory_0(): TopUBoundBounceAIFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ArtificialIntelligenceInterface | null {
        let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface | null = changetype<VelocityInterfaceCompositeInterface | null>(ownerLayerInterface);
        let velocityInterface: VelocityInterface | null = changetype<VelocityInterface | null>(velocityInterfaceCompositeInterface!.getVelocityProperties()); if (JThrowable.pending !== null) return null;
        let maxDistancePerTick: i32 = (velocityInterface!.getMaxForwardVelocity() >> velocityInterface!.getVelocityXBasicDecimalP()!.getScaledFactor()); if (JThrowable.pending !== null) return null;
        let halfWidth: i32 = ownerLayerInterface!.getWidth() * 2 + maxDistancePerTick + 1; if (JThrowable.pending !== null) return null;
        let halfHeight: i32 = ownerLayerInterface!.getHeight() * 2 + maxDistancePerTick + 1; if (JThrowable.pending !== null) return null;
        let point: GPoint | null = PointFactory.getInstance()!.createXY(halfWidth, halfHeight + 60); if (JThrowable.pending !== null) return null;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return null;
        let rectangle: Rectangle | null = new Rectangle().jinit_Rectangle_3(point, (displayInfo!.getLastWidth() - halfWidth - point!.getX()), (displayInfo!.getLastHeight() - halfHeight - point!.getY())); if (JThrowable.pending !== null) return null;
        return new BoundBounceAI().jinit_BoundBounceAI_4(ownerLayerInterface, gameInput, new TopULayerBounds().jinit_TopULayerBounds_1(rectangle), new ReverseVelocityBoundsVisitor().jinit_ReverseVelocityBoundsVisitor_1(ownerLayerInterface));
    }
}

