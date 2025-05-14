"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowLeft,
  Users,
  FileText,
  Building,
} from "lucide-react";
import { nyscSecretariats } from "@/data/NyscSeceteriats";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../DashboardLayout";

export default function OfficeDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const navigate = useNavigate();

  const office = nyscSecretariats.find((office) => office.id === id);

  if (!office) {
    return (
      <div className="container mx-auto py-6 max-w-7xl bg-gray-50">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Office Not Found</h2>
          <p className="mb-6">
            The NYSC office you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/dashboard/locations")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Offices
          </Button>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto py-6 max-w-7xl bg-gray-50">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/dashboard/locations")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Offices
        </Button>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">
                  NYSC {office.state} State Secretariat
                </CardTitle>
                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <MapPin size={16} className="shrink-0" />
                  <span>{office.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-md">
                <Star size={18} className="text-yellow-500 fill-yellow-500" />
                <span className="font-medium text-lg">{office.ratings}</span>
                <span className="text-sm text-gray-500">
                  ({office.reviews} reviews)
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone
                      size={18}
                      className="text-gray-500 mt-0.5 shrink-0"
                    />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-[#008000] hover:underline"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-gray-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[#008000] hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="text-gray-500 mt-0.5 shrink-0"
                    />
                    <div>
                      <div className="font-medium">Office Hours</div>
                      <div>8:00 AM - 4:00 PM</div>
                      <div className="text-sm text-gray-500">
                        Monday to Friday
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Services Offered</h3>
                <div className="grid grid-cols-1 gap-3">
                  {office.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-md"
                    >
                      <div className="bg-[#008000]/10 p-2 rounded-md">
                        {service === "Documentation" && (
                          <FileText size={18} className="text-[#008000]" />
                        )}
                        {service === "Posting" && (
                          <Building size={18} className="text-[#008000]" />
                        )}
                        {service === "Relocation" && (
                          <MapPin size={18} className="text-[#008000]" />
                        )}
                        {service === "Orientation" && (
                          <Users size={18} className="text-[#008000]" />
                        )}
                        {service === "Clearance" && (
                          <FileText size={18} className="text-[#008000]" />
                        )}
                        {service === "CDS" && (
                          <Users size={18} className="text-[#008000]" />
                        )}
                        {service === "Medical Clearance" && (
                          <FileText size={18} className="text-[#008000]" />
                        )}
                        {service === "Community Development" && (
                          <Users size={18} className="text-[#008000]" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{service}</div>
                        <div className="text-sm text-gray-500">
                          Available at this office
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="reviews">
          <TabsList className="mb-4">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="directions">Directions</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No reviews yet</h3>
                  <p className="text-gray-500 mb-4">
                    Be the first to share your experience with this NYSC office
                  </p>
                  <Button>Write a Review</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faqs">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No FAQs available
                  </h3>
                  <p className="text-gray-500 mb-4">
                    We're working on adding FAQs for this NYSC office
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="directions">
            <Card>
              <CardHeader>
                <CardTitle>Directions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MapPin className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    Map not available
                  </h3>
                  <p className="text-gray-500 mb-4">
                    We're working on adding maps and directions for this NYSC
                    office
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
