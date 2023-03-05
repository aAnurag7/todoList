const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    data:[
        {
            id:{
                type: String,
                required:true
            },
            title:{
                type: String,
                required:true
            },
            cards:[
                {
                    id:{
                        type: String,
                        required:true
                    },
                    title:{
                        type: String,
                        required:true
                    },
                    date:{
                        type: String,
                        required:true
                    },
                    tasks:[
                        {
                            id:{
                                type: String,
                                required:true
                            },
                            completed:{
                                type: String,
                                required:true
                            },
                            title:{
                                type: String,
                                required:true
                            } 
                        }
                    ]
                }
            ]
            
        }
    ]
})


const Board = mongoose.model('board',boardSchema);
module.exports = Board;