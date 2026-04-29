/* According to this priciple , 'derived or child classes must be able to replace thier base or 
parent classes '.  
Example: One of the classic examples of this principle is a rectangle having four sides. 
A rectangle's height can be any value and width can be any value. A square is a rectangle with equal 
width and height. So we can say that we can extend the properties of the rectangle class into square 
class. 
*/

class Rectangle{
    constructor(width , height){
        this.width = width;
        this.height = height; 
    }

    area(){
        return this.width * this.height;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height
    }

    setWidth(width){
        this.width =width;
    }
    setHeight(height){
       this.height = height;
    }

}

class Square extends Rectangle{
    constructor(size){
        super(size, size)
    }

    setWidth(width){
        this.width = this.height = width;
    }
}