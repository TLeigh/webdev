var Home = {};

Home.TransferBackgroundClasses = function (fromCell, toCell)
{
    toCell.removeClass("piece");
    toCell.removeClass("black");
    toCell.removeClass("red");

    if (fromCell.hasClass("piece")) toCell.addClass("piece");
    if (fromCell.hasClass("black")) toCell.addClass("black");
    if (fromCell.hasClass("red")) toCell.addClass("red");

    fromCell.removeClass("piece");
    fromCell.removeClass("black");
    fromCell.removeClass("red");
}

Home.MovePiece = function (piece)
{
    if (!piece.hasClass("highlight"))
    {
        Home.TransferBackgroundClasses(Home.SelectedCell, piece);
    }

    Home.SelectedCell.removeClass("highlight");
    Home.SelectedCell = null;
}

Home.SelectPiece = function (cell)
{
    if (cell.hasClass("piece"))
    {
        Home.SelectedCell = cell;
        Home.SelectedCell.addClass("highlight");
    }
}

$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.addClass(isDark ? "dark" : "light");
    }

    $(".cell").click(function ()
    {
        if (Home.SelectedCell != null)
        {
            Home.MovePiece($(this));
        }
        else
        {
            Home.SelectPiece($(this));
        }
    });
});