

const mongoose = require('mongoose');


class DatabaseModule {

    static async Initialize() {
        try {

        } catch(error) {

            await mongoose.connect(
                "mongodb://127.0.0.1/poker_db", {
                  serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds
                }
              );
        }
    }
}


// const pieceList = [
//     "w-king",
//     "w-queen",
//     "w-bishop-1",
//     "w-bishop-2",
//     "w-rook-1",
//     "w-rook-2",
//     "w-knight-1",
//     "w-knight-2",
//     "w-pawn-1",
//     "w-pawn-2",
//     "w-pawn-3",
//     "w-pawn-4",
//     "w-pawn-5",
//     "w-pawn-6",
//     "w-pawn-7",
//     "w-pawn-8",

//     "b-king",
//     "b-queen",
//     "b-bishop-1",
//     "b-bishop-2",
//     "b-rook-1",
//     "b-rook-2",
//     "b-knight-1",
//     "b-knight-2",
//     "b-pawn-1",
//     "b-pawn-2",
//     "b-pawn-3",
//     "b-pawn-4",
//     "b-pawn-5",
//     "b-pawn-6",
//     "b-pawn-7",
//     "b-pawn-8",
// ];

// const matchSchema = new mongoose.Schema({

//     created_on : { type: Date, default: Date.now},
//     board : {
//         a1 : { type : String, required : false, enum : [pieceList], default : null },
//         a2 : { type : String, required : false, enum : [pieceList], default : null },
//         a3 : { type : String, required : false, enum : [pieceList], default : null },
//         a4 : { type : String, required : false, enum : [pieceList], default : null },
//         a5 : { type : String, required : false, enum : [pieceList], default : null },
//         a6 : { type : String, required : false, enum : [pieceList], default : null },
//         a7 : { type : String, required : false, enum : [pieceList], default : null },
//         a8 : { type : String, required : false, enum : [pieceList], default : null },

//         b1 : { type : String, required : false, enum : [pieceList], default : null },
//         b2 : { type : String, required : false, enum : [pieceList], default : null },
//         b3 : { type : String, required : false, enum : [pieceList], default : null },
//         b4 : { type : String, required : false, enum : [pieceList], default : null },
//         b5 : { type : String, required : false, enum : [pieceList], default : null },
//         b6 : { type : String, required : false, enum : [pieceList], default : null },
//         b7 : { type : String, required : false, enum : [pieceList], default : null },
//         b8 : { type : String, required : false, enum : [pieceList], default : null },

//         c1 : { type : String, required : false, enum : [pieceList], default : null },
//         c2 : { type : String, required : false, enum : [pieceList], default : null },
//         c3 : { type : String, required : false, enum : [pieceList], default : null },
//         c4 : { type : String, required : false, enum : [pieceList], default : null },
//         c5 : { type : String, required : false, enum : [pieceList], default : null },
//         c6 : { type : String, required : false, enum : [pieceList], default : null },
//         c7 : { type : String, required : false, enum : [pieceList], default : null },
//         c8 : { type : String, required : false, enum : [pieceList], default : null },


//         d1 : { type : String, required : false, enum : [pieceList], default : null },
//         d2 : { type : String, required : false, enum : [pieceList], default : null },
//         d3 : { type : String, required : false, enum : [pieceList], default : null },
//         d4 : { type : String, required : false, enum : [pieceList], default : null },
//         d5 : { type : String, required : false, enum : [pieceList], default : null },
//         d6 : { type : String, required : false, enum : [pieceList], default : null },
//         d7 : { type : String, required : false, enum : [pieceList], default : null },
//         d8 : { type : String, required : false, enum : [pieceList], default : null },

//         e1 : { type : String, required : false, enum : [pieceList], default : null },
//         e2 : { type : String, required : false, enum : [pieceList], default : null },
//         e3 : { type : String, required : false, enum : [pieceList], default : null },
//         e4 : { type : String, required : false, enum : [pieceList], default : null },
//         e5 : { type : String, required : false, enum : [pieceList], default : null },
//         e6 : { type : String, required : false, enum : [pieceList], default : null },
//         e7 : { type : String, required : false, enum : [pieceList], default : null },
//         e8 : { type : String, required : false, enum : [pieceList], default : null },
        
//         f1 : { type : String, required : false, enum : [pieceList], default : null },
//         f2 : { type : String, required : false, enum : [pieceList], default : null },
//         f3 : { type : String, required : false, enum : [pieceList], default : null },
//         f4 : { type : String, required : false, enum : [pieceList], default : null },
//         f5 : { type : String, required : false, enum : [pieceList], default : null },
//         f6 : { type : String, required : false, enum : [pieceList], default : null },
//         f7 : { type : String, required : false, enum : [pieceList], default : null },
//         f8 : { type : String, required : false, enum : [pieceList], default : null },

//         g1 : { type : String, required : false, enum : [pieceList], default : null },
//         g2 : { type : String, required : false, enum : [pieceList], default : null },
//         g3 : { type : String, required : false, enum : [pieceList], default : null },
//         g4 : { type : String, required : false, enum : [pieceList], default : null },
//         g5 : { type : String, required : false, enum : [pieceList], default : null },
//         g6 : { type : String, required : false, enum : [pieceList], default : null },
//         g7 : { type : String, required : false, enum : [pieceList], default : null },
//         g8 : { type : String, required : false, enum : [pieceList], default : null },

//         h1 : { type : String, required : false, enum : [pieceList], default : null },
//         h2 : { type : String, required : false, enum : [pieceList], default : null },
//         h3 : { type : String, required : false, enum : [pieceList], default : null },
//         h4 : { type : String, required : false, enum : [pieceList], default : null },
//         h5 : { type : String, required : false, enum : [pieceList], default : null },
//         h6 : { type : String, required : false, enum : [pieceList], default : null },
//         h7 : { type : String, required : false, enum : [pieceList], default : null },
//         h8 : { type : String, required : false, enum : [pieceList], default : null },
//     },
//     start : {
//         black : { type : Number},
//         white : { type : Number},
//     },
//     status : {
//         type : String,
//         enum : ["NOT_STARTED", "IN_PROGRESS", "WHITE_CHECKMATE", "BLACK_CHECKMATE", "WHITE_SURRENDER", "BLACK_SURRENDER", "STALEMATE"],
//         default: "NOT_STARTED"
//     }
// });

// const boardlocation = [
//     "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", 
//     "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", 
//     "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", 
//     "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", 
//     "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", 
//     "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", 
//     "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", 
//     "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", 
// ]

// const moveSchema = new mongoose.Schema({

//     match_id : { type : mongoose.Schema.Types.ObjectId, ref: "Match"},
//     start : { type : String, required : false, enum : [boardlocation]},
//     end : { type : String, required : false, enum : [boardlocation]},
//     piece : { type : String, required : true, enum : [pieceList] },
//     action : { type : String, required : true, enum : ["UNKNWN", "MOVE", "TAKE"], default : "UNKWN" },
// });

// const playerSchema = new mongoose.Schema({

//     username : String
// });


// const MatchModel = mongoose.model("Match", matchSchema);
// const MoveModel = mongoose.model("Move", moveSchema);
// const PlayerModel = mongoose.model("Player", playerSchema);

// const model = {
//     MatchModel : MatchModel,
//     MoveModel : MoveModel,
//     PlayerModel : PlayerModel
// }


const sessionSchema = mongoose.Schema({
    created_on : {type : Date, default: Date.now},
});

const actionSchema = mongoose.Schema({
    
});

const playerSchema = new mongoose.Schema({

    username : String
});

const SessionModel = mongoose.model("Session", sessionSchema);
const ActionModel = mongoose.model("Action", actionSchema);
const PlayerModel = mongoose.model("Player", playerSchema);

const model = {
    DatabaseModule : DatabaseModule,
    SessionModel : SessionModel,
    ActionModel : ActionModel,
    PlayerModel : PlayerModel
}

module.exports = model;