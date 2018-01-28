import { UiControl } from '../ui/UiControl';

/**
 * @author tengge / https://github.com/tengge1
 */

function Scene(options) {
    UiControl.call(this, options);
    options = options || {};
    this.app = options.app || null;
    this.name = options.name || 'Scene';
    this.width = options.width || '900px';
    this.height = options.height || '500px';
}

Scene.prototype = Object.create(UiControl.prototype);
Scene.prototype.constructor = Scene;

Scene.prototype.getName = function() {
    return this.name;
};

Scene.prototype.setName = function(name) {
    this.name = name;
};

Scene.prototype.start = function() {

};

Scene.prototype.pause = function() {

};

Scene.prototype.stop = function() {

};

Scene.prototype.save = function() {

};

Scene.prototype.load = function() {

};

export { Scene };