import { useState } from "react";
import useSwr from "swr";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
};

export function SwrDemo() {
  const [planets, setPlanets] = useState<Array<Planet>>([]);

  useSwr("https://swapi.info/api/planets", (url) =>
    fetch(url).then(async (res) => setPlanets(await res.json())),
  );

  return (
    <Card className="w-96">
      <CardHeader>Fetch with SWR</CardHeader>
      <CardContent>
        <Tabs defaultValue="Tatooine">
          <TabsList className="w-[340px] overflow-x-auto h-16 justify-start">
            {planets.map(
              (planet, index) =>
                planet.name !== "unknown" && (
                  <TabsTrigger key={index} value={planet.name}>
                    {planet.name}
                  </TabsTrigger>
                ),
            )}
          </TabsList>
          {planets.map(
            (planet, index) =>
              planet.name !== "unknown" && (
                <TabsContent key={index} value={planet.name} className="h-96">
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Name: {planet.name}</li>
                    <li>Climate: {planet.climate}</li>
                    <li>Terrain: {planet.terrain}</li>
                    <li>Surface Water: {planet.surface_water}</li>
                    <li>Diameter: {planet.diameter}</li>
                    <li>Gravity: {planet.gravity}</li>
                    <li>Orbital Period: {planet.orbital_period}</li>
                    <li>Rotation Period: {planet.rotation_period}</li>
                    <li>Population: {planet.population}</li>
                  </ul>
                </TabsContent>
              ),
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}
