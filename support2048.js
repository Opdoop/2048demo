/**
 * Created by 24753 on 2016/9/29.
 */
documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18*documentWidth;
cellSpace = 0.04*documentWidth;

function getPosTop ( i , j){
    return cellSpace + i*(cellSpace+cellSideLength);
}

function getPosLeft ( i , j){
    return  cellSpace + j*(cellSpace+cellSideLength);
}

function getNumberBackgroundColor(number){
    switch(number){
        //case 2:return "url(http://www.imooc.com/activity/2048/117139/pics/1.jpg)";break;
        case 2:return "url(graph/nrt1.jpg)";break;
        case 4:return "url(graph/ssk1.jpg)";break;
        case 8:return "url(graph/nrt2.jpg)";break;
        case 16:return "url(graph/ssk2.jpg)";break;
        case 32:return "url(graph/nrt3.jpg)";break;
        case 64:return "url(graph/ssk3.jpg)";break;
        case 128:return "url(graph/nrt4.jpg)";break;
        case 256:return "url(graph/ssk4.jpg)";break;
        case 512:return "url(graph/nrt5.jpg)";break;
        case 1024:return "url(graph/ssk5.jpg)";break;
        case 2048:return "url(graph/2048.png)";break;
        case 4096:return "url(graph/nrt1.jpg)";break;
        case 8192:return "url(graph/nrt1.jpg)";break;
    }

    return "black";
}

function getNumberColor(number){
    //if (number <= 4)
    //    return "#776e65";

    return "white";
}

function nospace( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 0 ; j < 4 ; j ++ )
            if( board[i][j] == 0 )
                return false;

    return true;
}

function canMoveLeft( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 1; j < 4 ; j ++ )
            if( board[i][j] != 0 )
                if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
                    return true;

    return false;
}

function canMoveRight( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2; j >= 0 ; j -- )
            if( board[i][j] != 0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
                    return true;

    return false;
}

function canMoveUp( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1; i < 4 ; i ++ )
            if( board[i][j] != 0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
                    return true;

    return false;
}

function canMoveDown( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2; i >= 0 ; i -- )
            if( board[i][j] != 0 )
                if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
                    return true;

    return false;
}

function noBlockHorizontal(row, col1,col2,board){
    //if( col1 > col2){
    //    var temp = col1;
    //    col1 = col2;
    //    col2 = temp;
    //}
    for( var i = col1 +1 ; i <col2 ; i++)
        if( board[row][i] != 0)
            return false;
    return true;
}

function noBlockVertical(col, row1,row2,board){
    //if( row1 > row2){
    //    var temp = row1;
    //    row1 = row2;
    //    row2 = temp;
    //}
    for( var i = row1 +1 ; i <row2 ; i++)
        if( board[i][col] != 0)
            return false;
    return true;
}

function nomove(board){
    if(canMoveLeft( board )||
        canMoveRight( board )||
        canMoveUp( board )||
        canMoveDown( board ))
    return false;

    return true;
}