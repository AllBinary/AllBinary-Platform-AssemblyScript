// Generated Code Do Not Modify
// package org.allbinary.game.collision
// import org.allbinary.layer.AllBinaryLayer

@global export class Collision2DProcessor extends CollisionProcessor {

    jclassName(): string {
        return "org.allbinary.game.collision.Collision2DProcessor";
    }

    jinit_Collision2DProcessor_0(): Collision2DProcessor {
        super.jinit_CollisionProcessor_0();
        return this;
    }
    

    isCollision(myLayer: AllBinaryLayer | null, myLayer2: AllBinaryLayer | null): bool {
        if (myLayer2!.getXP() >= myLayer!.getX2() || myLayer2!.getYP() >= myLayer!.getY2() || myLayer2!.getX2() <= myLayer!.getXP() || myLayer2!.getY2() <= myLayer!.getYP()) {
            return false;
        } else {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

