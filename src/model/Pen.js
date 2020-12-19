import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Pen = new Schema(
  {
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Pen`, Pen, `Pen`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
