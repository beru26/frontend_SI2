var nodes = [

    {
        links: [ 1 ], // node 0 is linked to node 1
        visited: false
    }, {
        links: [ 0, 2 ], // node 1 is linked to node 0 and 2
        visited: false
    },

    {
        links: [ 3 ], // node 0 is linked to node 1
        visited: false
    },
 ];


function dfs( start ) {
    var listToExplore = [ start ];

    nodes[ start ].visited = true;

    while ( listToExplore.length > 0 ) {
        var nodeIndex = listToExplore.shift();
        nodes[ nodeIndex ].links.forEach( function( childIndex ) {
            if ( !nodes[ childIndex ].visited ) {
                nodes[ childIndex ].visited = true;
                listToExplore.push( childIndex );
            }
        } );
    }
};

 console.log(dfs( 0 ));
