var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function CourseItem(itemID) {
    return function (target) {
        target.prototype.id = itemID;
    };
}
var Astronomy = /** @class */ (function () {
    function Astronomy() {
    }
    Astronomy = __decorate([
        CourseItem('ace')
    ], Astronomy);
    return Astronomy;
}());
var Reading = /** @class */ (function () {
    function Reading() {
    }
    Reading = __decorate([
        CourseItem('gik')
    ], Reading);
    return Reading;
}());
console.log(new Astronomy().id);
