"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { CustomInput } from "@/components/shared/CustomInput"
import CustomSelect from "@/components/shared/CustomSelect"
import { Button } from "@/components/ui/button"
import { useMemo } from "react"
import { AvatarUpload } from "./AvatarUpload"

const countries = [
  { label: "Nigeria", value: "Nigeria" },
  { label: "United States", value: "USA" },
]

export function PersonalStep() {
  const { resume, update } = useResumeBuilder()

  const p = resume.personal

  const fullName = useMemo(
    () => `${p.first_name || ""} ${p.last_name || ""}`.trim(),
    [p.first_name, p.last_name]
  )

  return (
    <div className="space-y-4">
      
      {/* 🔥 HEADER */}
      <div className="border-b pb-3">
        <h2 className="text-xl font-semibold">Personal Details</h2>
        <p className="text-sm text-muted-foreground">
          Users who added phone and email received 64% more recruiter responses.
        </p>
      </div>

      {/* 🎯 JOB TARGET */}
      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          label="Job Target"
          value={p.job_title || ""}
          required
          onChange={(e) =>
            update("personal", { job_title: e.target.value })
          }
          placeholder="Software Engineer"
          className=" "
        />
        <AvatarUpload />

      </div>
      

      {/* 👤 NAME */}
      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          label="First Name"
          value={p.first_name}
          onChange={(e) =>
            update("personal", { first_name: e.target.value })
          }
          required
        />

        <CustomInput
          label="Last Name"
          value={p.last_name}
          onChange={(e) =>
            update("personal", { last_name: e.target.value })
          }
          required
        />
      </div>

      {/* 📞 CONTACT */}
      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          label="Email"
          type="email"
          value={p.email || ""}
          onChange={(e) =>
            update("personal", { email: e.target.value })
          }
        />

        <CustomInput
          label="Phone"
          value={p.phone || ""}
          onChange={(e) =>
            update("personal", { phone: e.target.value })
          }
        />
      </div>

      <CustomInput
        label="LinkedIn"
        value={p.linkedin || ""}
        onChange={(e) =>
          update("personal", { linkedin: e.target.value })
        }
        placeholder="linkedin.com/in/yourprofile"
      />

      {/* 📍 LOCATION */}
      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          label="City"
          value={p.city || ""}
          onChange={(e) =>
            update("personal", { city: e.target.value })
          }
        />

        <CustomInput
          label="State"
          value={p.state || ""}
          onChange={(e) =>
            update("personal", { state: e.target.value })
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          label="Postal Code"
          value={p.postal_code || ""}
          onChange={(e) =>
            update("personal", { postal_code: e.target.value })
          }
        />

        <CustomSelect
          name="country"
          label="Country"
          value={p.country || ""}
          onChange={(val) =>
            update("personal", { country: val })
          }
          options={countries}
        />
      </div>

      <CustomInput
        label="Address"
        value={p.address || ""}
        onChange={(e) =>
          update("personal", { address: e.target.value })
        }
      />

      {/* 🔽 TOGGLE ADDITIONAL */}
      <div>
        <span
          // variant="ghost"
          className="cursor-pointer px-0 py-0 h-0 text-sm text-primary/90 hover:text-primary"
          onClick={() =>
            update("personal", {
              show_additional_details: !p.show_additional_details,
            })
          }
        >
          {p.show_additional_details
            ? "Hide additional details"
            : "Show additional details"}
        </span>
      </div>

      {/* 🧾 ADDITIONAL */}
      {p.show_additional_details && (
        <div className="grid grid-cols-2 gap-4">
          <CustomInput
            label="Driving License"
            value={p.driving_license || ""}
            onChange={(e) =>
              update("personal", { driving_license: e.target.value })
            }
          />

          <CustomInput
            label="Nationality"
            value={p.nationality || ""}
            onChange={(e) =>
              update("personal", { nationality: e.target.value })
            }
          />

          <CustomInput
            label="Place of Birth"
            value={p.place_of_birth || ""}
            onChange={(e) =>
              update("personal", { place_of_birth: e.target.value })
            }
          />

          <CustomInput
            label="Date of Birth"
            type="date"
            value={p.date_of_birth || ""}
            onChange={(e) =>
              update("personal", { date_of_birth: e.target.value })
            }
          />
        </div>
      )}
    </div>
  )
}