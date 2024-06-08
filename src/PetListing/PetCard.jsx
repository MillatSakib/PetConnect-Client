import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PetCard = ({ data }) => {
  return (
    <div>
      <div className="m-4">
        <Card className="w-full max-w-[700px] hover:scale-[1.01] duration-300 ease-in-out mx-auto">
          <CardHeader>
            <CardTitle>
              <div className="h-[300px] w-full">
                <img
                  src={data?.petImgURL}
                  className="rounded-xl object-cover h-[300px] w-full"
                ></img>
              </div>
            </CardTitle>
            <CardDescription>
              <h3 className="text-xl font-bold lg:text-2xl mt-4">
                Pet Name:{" "}
                <span className="text-orange-400">{data?.petName}</span>
              </h3>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>Age: {data?.petAge}</div>
            <div className="font-bold opacity-55">
              Location: {data?.petLocation}
            </div>
          </CardContent>
          <CardFooter>
            <Link to={`/petDetails/${data?._id}`} className="w-[100%]">
              <Button className="w-[100%]" variant="MyTheme">
                Get Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PetCard;
