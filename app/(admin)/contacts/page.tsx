"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axiosInstance from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/endpoints";
import { toast } from "sonner";

interface Contact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([
    { name: "Rajesh Kumar", email: "rajesh@example.com", phone: "+91-9876543210", city: "Mumbai", country: "India" },
    { name: "Maria Garcia", email: "maria@example.com", phone: "+34-612345678", city: "Madrid", country: "Spain" },
    { name: "John Smith", email: "john@example.com", phone: "+1-555-123-4567", city: "San Francisco", country: "USA" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) => {
    const query = searchQuery.toLowerCase();
    return (
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.phone.includes(query) ||
      contact.city.toLowerCase().includes(query) ||
      contact.country.toLowerCase().includes(query)
    );
  });

  const handleAddContact = async () => {
    // Validate form
    if (!formData.name || !formData.email) {
      toast.error("Name and Email are required");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post(ENDPOINTS.contacts, formData);
      const newContact = response.data;
      setContacts([...contacts, newContact]);
      toast.success("Contact added successfully");
      setIsAddDialogOpen(false);
      setFormData({ name: "", email: "", phone: "", city: "", country: "" });
    } catch (error: any) {
      if (!error.response && process.env.NODE_ENV === "development") {
        // Backend not available - add locally for development
        const newContact: Contact = {
          id: `c-${Date.now()}`,
          ...formData,
        };
        setContacts([...contacts, newContact]);
        toast.success("Contact added (offline mode)");
        setIsAddDialogOpen(false);
        setFormData({ name: "", email: "", phone: "", city: "", country: "" });
      } else {
        toast.error(
          error.response?.data?.message || "Failed to add contact. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCSVImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith(".csv")) {
      toast.error("Please select a CSV file");
      return;
    }

    setIsLoading(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const text = e.target?.result as string;
        const lines = text.split("\n").filter((line) => line.trim());
        
        if (lines.length < 2) {
          toast.error("CSV file must contain at least a header row and one data row");
          setIsLoading(false);
          return;
        }

        // Parse CSV (assuming format: name,email,phone,city,country)
        const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
        const nameIndex = headers.findIndex((h) => h.includes("name"));
        const emailIndex = headers.findIndex((h) => h.includes("email"));
        const phoneIndex = headers.findIndex((h) => h.includes("phone"));
        const cityIndex = headers.findIndex((h) => h.includes("city"));
        const countryIndex = headers.findIndex((h) => h.includes("country"));

        if (nameIndex === -1 || emailIndex === -1) {
          toast.error("CSV must contain 'name' and 'email' columns");
          setIsLoading(false);
          return;
        }

        const newContacts: Contact[] = [];
        const errors: string[] = [];

        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(",").map((v) => v.trim());
          const name = values[nameIndex] || "";
          const email = values[emailIndex] || "";

          if (!name || !email) {
            errors.push(`Row ${i + 1}: Missing name or email`);
            continue;
          }

          // Basic email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            errors.push(`Row ${i + 1}: Invalid email format`);
            continue;
          }

          newContacts.push({
            name,
            email,
            phone: values[phoneIndex] || "",
            city: values[cityIndex] || "",
            country: values[countryIndex] || "",
          });
        }

        if (newContacts.length === 0) {
          toast.error("No valid contacts found in CSV file");
          setIsLoading(false);
          return;
        }

        // Try to import via API
        try {
          const formData = new FormData();
          formData.append("file", file);

          const response = await axiosInstance.post(
            ENDPOINTS.contactsImport,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          // Refresh contacts list
          const contactsResponse = await axiosInstance.get(ENDPOINTS.contacts);
          setContacts(contactsResponse.data);
          toast.success(`Successfully imported ${newContacts.length} contact(s)`);
        } catch (error: any) {
          if (!error.response && process.env.NODE_ENV === "development") {
            // Backend not available - add locally for development
            const contactsWithIds = newContacts.map((contact, idx) => ({
              ...contact,
              id: `c-${Date.now()}-${idx}`,
            }));
            setContacts([...contacts, ...contactsWithIds]);
            toast.success(
              `Imported ${newContacts.length} contact(s) (offline mode)`
            );
          } else {
            // If API fails, still add locally
            const contactsWithIds = newContacts.map((contact, idx) => ({
              ...contact,
              id: `c-${Date.now()}-${idx}`,
            }));
            setContacts([...contacts, ...contactsWithIds]);
            toast.warning(
              `Imported ${newContacts.length} contact(s) locally. API unavailable.`
            );
          }
        }

        if (errors.length > 0) {
          toast.warning(
            `Imported ${newContacts.length} contact(s), but ${errors.length} row(s) had errors`
          );
        }
      } catch (error) {
        toast.error("Failed to parse CSV file. Please check the format.");
      } finally {
        setIsLoading(false);
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    };

    reader.onerror = () => {
      toast.error("Failed to read CSV file");
      setIsLoading(false);
    };

    reader.readAsText(file);
  };

  const handleDeleteContact = async (index: number) => {
    const contact = filteredContacts[index];
    if (!confirm(`Are you sure you want to delete ${contact.name}?`)) {
      return;
    }

    try {
      if (contact.id) {
        await axiosInstance.delete(`${ENDPOINTS.contacts}/${contact.id}`);
      }
      setContacts(contacts.filter((c) => c !== contact));
      toast.success("Contact deleted successfully");
    } catch (error: any) {
      if (!error.response && process.env.NODE_ENV === "development") {
        // Backend not available - delete locally for development
        setContacts(contacts.filter((c) => c !== contact));
        toast.success("Contact deleted (offline mode)");
      } else {
        toast.error("Failed to delete contact. Please try again.");
      }
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Contacts</h2>
          <p className="text-muted-foreground mt-1">Manage your contact list</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleCSVImport}
            className="hidden"
            id="csv-upload"
          />
          <label htmlFor="csv-upload">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto cursor-pointer"
              disabled={isLoading}
              asChild
            >
              <span>
                <svg
                  className="w-5 h-5 mr-2 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                {isLoading ? "Importing..." : "Import CSV"}
              </span>
            </Button>
          </label>
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => setIsAddDialogOpen(true)}
            disabled={isLoading}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Contact
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              className="pl-10"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    {searchQuery ? "No contacts found matching your search" : "No contacts yet"}
                  </TableCell>
                </TableRow>
              ) : (
                filteredContacts.map((contact, idx) => (
                  <TableRow key={contact.id || idx}>
                    <TableCell>
                      <div className="font-medium">{contact.name}</div>
                    </TableCell>
                    <TableCell className="text-foreground">{contact.email}</TableCell>
                    <TableCell className="text-foreground">{contact.phone}</TableCell>
                    <TableCell>{contact.city}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{contact.country}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteContact(idx)}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Contact Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Contact</DialogTitle>
            <DialogDescription>
              Add a new contact to your contact list. Name and Email are required.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1-555-123-4567"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="San Francisco"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  placeholder="USA"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsAddDialogOpen(false);
                setFormData({ name: "", email: "", phone: "", city: "", country: "" });
              }}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button onClick={handleAddContact} disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Contact"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
