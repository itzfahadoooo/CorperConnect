"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Star,
  Phone,
  Clock,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { nyscSecretariats } from "@/data/NyscSeceteriats";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function NyscOfficesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [viewType, setViewType] = useState("list");

  // Get unique states for the filter dropdown
  const states = useMemo(() => {
    return [
      "All States",
      ...new Set(nyscSecretariats.map((office) => office.state)),
    ].sort();
  }, []);

  // Get unique services for the filter dropdown
  const services = useMemo(() => {
    const allServices = new Set<string>();
    nyscSecretariats.forEach((office) => {
      office.services.forEach((service) => allServices.add(service));
    });
    return ["All Services", ...Array.from(allServices)].sort();
  }, []);

  // Filter offices based on search query and selected state
  const filteredOffices = useMemo(() => {
    return nyscSecretariats.filter((office) => {
      const matchesSearch =
        searchQuery === "" ||
        office.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        office.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState =
        selectedState === "" ||
        selectedState === "All States" ||
        office.state === selectedState;

      const matchesService =
        selectedService === "" ||
        selectedService === "All Services" ||
        office.services.includes(selectedService);

      return matchesSearch && matchesState && matchesService;
    });
  }, [searchQuery, selectedState, selectedService]);

  return (
    <DashboardLayout>
      <div className="container mx-auto py-6 max-w-7xl bg-gray-50">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">NYSC State Offices</h1>
          <p className="text-gray-600">
            Find information and reviews about NYSC offices across Nigeria
          </p>
        </div>

        {/* Search and filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Search by state or location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* State filter */}
              <div className="w-full md:w-48">
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger >
                    <SelectValue placeholder="All States" />
                  </SelectTrigger>
                  <SelectContent >
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Service filter */}
              <div className="w-full md:w-48">
                <Select
                  value={selectedService}
                  onValueChange={setSelectedService}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Services" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* View type toggle */}
              <Tabs
                defaultValue="list"
                className="w-full md:w-auto"
                value={viewType}
                onValueChange={setViewType}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="card">Card View</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Results count */}
        <div className="mb-4 text-sm text-gray-600">
          Found {filteredOffices.length} NYSC{" "}
          {filteredOffices.length === 1 ? "office" : "offices"}
        </div>

        {/* Empty state */}
        {filteredOffices.length === 0 && (
          <Card className="p-8 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <Search size={48} className="text-gray-300" />
              <h3 className="text-lg font-medium">No NYSC offices found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedState("");
                  setSelectedService("");
                }}
              >
                Clear all filters
              </Button>
            </div>
          </Card>
        )}

        {/* List view */}
        {viewType === "list" && filteredOffices.length > 0 && (
          <div className="space-y-4">
            {filteredOffices.map((office) => (
              <Card
                key={office.id}
                className="overflow-hidden hover:border-[#008000] transition-colors"
              >
                <CardContent className="p-0">
                  <Link
                    to={`/dashboard/locations/${office.id}`}
                    className="block"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold">
                              NYSC {office.state} State Secretariat
                            </h3>
                            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm">
                              <Star
                                size={16}
                                className="text-yellow-500 fill-yellow-500"
                              />
                              <span className="font-medium">
                                {office.ratings}
                              </span>
                              <span className="text-xs text-gray-500">
                                ({office.reviews})
                              </span>
                            </div>
                          </div>

                          <div className="mt-2 space-y-2">
                            <div className="flex items-start gap-2 text-sm">
                              <MapPin
                                size={16}
                                className="text-gray-500 mt-0.5 shrink-0"
                              />
                              <span>{office.address}</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                              <Phone
                                size={16}
                                className="text-gray-500 shrink-0"
                              />
                              <span>{office.phone}</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                              <Mail
                                size={16}
                                className="text-gray-500 shrink-0"
                              />
                              <span>{office.email}</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                              <Clock
                                size={16}
                                className="text-gray-500 shrink-0"
                              />
                              <span>8:00 AM - 4:00 PM (Mon-Fri)</span>
                            </div>
                          </div>
                        </div>

                        <div className="w-full sm:w-auto">
                          <div className="text-xs font-medium text-gray-500 mb-2">
                            Services
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {office.services.map((service, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-gray-50"
                              >
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Card view */}
        {viewType === "card" && filteredOffices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOffices.map((office) => (
              <Card
                key={office.id}
                className="overflow-hidden hover:border-[#008000] transition-colors h-full"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">
                      NYSC {office.state} State Secretariat
                    </CardTitle>
                    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm">
                      <Star
                        size={14}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="font-medium">{office.ratings}</span>
                      <span className="text-xs text-gray-500">
                        ({office.reviews})
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 pt-0">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin
                      size={16}
                      className="text-gray-500 mt-0.5 shrink-0"
                    />
                    <span>{office.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} className="text-gray-500 shrink-0" />
                    <span>{office.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} className="text-gray-500 shrink-0" />
                    <span className="truncate">{office.email}</span>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-2">
                      Services
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {office.services.map((service, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-gray-50 text-xs"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <Link to={`/dashboard/locations/${office.id}`}>
                        View Details
                        <ExternalLink size={14} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
