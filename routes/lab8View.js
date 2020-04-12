exports.get = function(req, res) {
    
    parentStyles = [ 'justify-content', 'space-between' ];
    childStyles  = [ 'flex-basis', '100px' ];

    res.render(`./labs/lab8`, {parentStyles, childStyles});
}