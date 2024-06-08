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
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = ({ data }) => {
  return (
    <div>
      <div className="m-4">
        <Card className="w-full max-w-[700px] hover:scale-[1.01] duration-300 ease-in-out mx-auto">
          <CardHeader>
            <CardTitle>
              <div className="h-[300px] w-full">
                <Skeleton className="h-[300px] w-full rounded-xl bg-slate-200 dark:bg-slate-800" />
              </div>
            </CardTitle>
            <CardDescription>
              <h3 className="text-xl font-bold lg:text-2xl mt-4">
                <Skeleton className="h-14 w-[60%] bg-slate-200 dark:bg-slate-800" />
              </h3>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="my-4">
              <Skeleton className="h-8 w-[80%] bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="font-bold">
              <Skeleton className="h-10 w-[80%] bg-slate-200 dark:bg-slate-800" />
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-12 w-full bg-slate-200 dark:bg-slate-800" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SkeletonCard;
