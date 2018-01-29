import { BaseCommand } from '../BaseCommand';

/**
 * @author tengge / https://github.com/tengge1
 */

function AddTubeCommand(options) {
    BaseCommand.call(this, options);
    options = options || {};
}

AddTubeCommand.prototype = Object.create(BaseCommand.prototype);
AddTubeCommand.prototype.constructor = AddTubeCommand;

AddTubeCommand.prototype.init = function() {
    var _this = this;
    this.app.event.on('addTube.command', function() {
        _this.run.call(_this);
    });
};

AddTubeCommand.prototype.run = function() {

    function CustomSinCurve(scale) {
        this.scale = (scale === undefined) ? 1 : scale;
    }

    CustomSinCurve.prototype = Object.create(THREE.Curve.prototype);
    CustomSinCurve.prototype.constructor = CustomSinCurve;

    CustomSinCurve.prototype.getPoint = function(t) {
        var tx = t * 3 - 1.5;
        var ty = Math.sin(2 * Math.PI * t);
        var tz = 0;
        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
    };

    var path = new CustomSinCurve(10);

    var geometry = new THREE.TubeBufferGeometry(path, 20, 2, 8, false);
    var material = new THREE.MeshPhongMaterial();
    var mesh = new THREE.Mesh(geometry, material);
    this.app.scene.add(mesh);
};

export { AddTubeCommand };