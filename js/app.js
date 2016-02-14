modalTrigger.on('click', function (event) { //modalTrigger =  $('a[data-type="cd-modal-trigger"]')
    event.preventDefault();
    $([modal.get(0), coverLayer.get(0)]).addClass('modal-is-visible'); //modal = $('.cd-modal'), coverLayer = $('.cd-cover-layer')
    animateModal(pathsArray, pathSteps, duration, 'open');
});

function animateModal(paths, pathSteps, duration, animationType) {
    var path1 = (animationType == 'open') ? pathSteps[1] : pathSteps[0], // pathSteps[n] = $('.cd-svg-bg').data('step'+(n+1));
        path2 = (animationType == 'open') ? pathSteps[3] : pathSteps[2],
        path3 = (animationType == 'open') ? pathSteps[5] : pathSteps[4];
    paths[0].animate({
        'd': path1
    }, duration, firstCustomMinaAnimation); //paths[0] = Snap('#cd-changing-path-1')
    paths[1].animate({
        'd': path2
    }, duration, firstCustomMinaAnimation); //paths[1] = Snap('#cd-changing-path-2')
    paths[2].animate({
        'd': path3
    }, duration, firstCustomMinaAnimation); //paths[2] = Snap('#cd-changing-path-3')
}
