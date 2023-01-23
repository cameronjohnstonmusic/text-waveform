class Words {

    constructor(x, y, p) {
        this.myP = createP(p);
        this.myP.position(x, y);
        this.myP.style("color", "purple");
        this.myP.style("font-size", "10px");

        this.positionY = this.myP.position.y;


    }

    removeWord() {

        this.myP.remove()
    }

    moveWord(x, y, p) {
        this.myP.remove();

        this.myP = createP(p);

        this.myP.position(x, y);
    }

    position() {

        this.positionX = this.myP.position.x;

        return (this.positionX);

    }
}