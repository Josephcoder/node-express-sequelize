import multer from "multer";
import path from "path";

declare global {
  namespace Express {
    interface Request {
      certificateFileName: any;
      planFileName: any;
      agendaFileName: any;
    }
  }
}

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "rgb_certificate_file_name") {
      cb(null, path.join(__dirname, "../public/certificate/"));
    }
    if (file.fieldname === "implementation_plan_file_name") {
      cb(null, path.join(__dirname, "../public/plan/"));
    }
    if (file.fieldname === "agenda_file_name") {
      cb(null, path.join(__dirname, "../public/agenda/"));
    }
  },
  filename: (req, file, cb) => {
    const indexOfSpace = file.originalname.indexOf(".");
    const fileName = `${Date.now()}.${file.originalname.substring(
      indexOfSpace + 1
    )}`;
    cb(null, fileName);
    if (file.fieldname === "rgb_certificate_file_name") {
      req.certificateFileName = fileName;
    }
    if (file.fieldname === "implementation_plan_file_name") {
      req.planFileName = fileName;
    }
    if (file.fieldname === "agenda_file_name") {
      req.agendaFileName = fileName;
    }
  },
});

export const fileUploader = multer({
  storage: storage,
});
// limits: { fileSize: 2000000 },
