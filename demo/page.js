$(function() {

    // upload without other settings
    $(".js-btn-upload").coreImageUpload ({
        url: "http://101.198.151.190/api/upload.php",
        inputOfFile: 'image',
        uploadedCallback: function (result) {
            alert(result);
        }
    });
    
    
    $(".js-btn-crop").coreImageUpload ({
        url: "http://101.198.151.190/api/crop.php",
        inputOfFile: 'image',
        enableCrop: true,
        cropRatio: '1:1',
        uploadedCallback: function (result) {
            alert( '裁剪成功!');
        }
    });
    
    
    
})