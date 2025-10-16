import { useState, useRef, useEffect } from "react";
import styles from "./DatePicker.module.css";
import Button from "../Button/Button";

interface DatePickerProps {
  value?: string;
  onChange?: (date: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function DatePicker({ value, onChange, placeholder = "Selecciona fecha", disabled = false }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(value || "");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Cerrar calendario al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        console.log("Se ejecutó")
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (month: Date) => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const date = new Date(year, monthIndex, 1);
    const days: number[] = [];
    while (date.getMonth() === monthIndex) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const handleSelectDate = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dayStr = String(date.getDate()).padStart(2, "0");
    const formatted = `${year}-${month}-${dayStr}`;

    setSelectedDate(formatted);
    onChange?.(formatted);
    setIsOpen(false);
  };

  const days = getDaysInMonth(currentMonth);

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <div className={styles.datePickerWrapper} ref={wrapperRef}>
      <input
        className={styles.input}
        readOnly
        value={selectedDate}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        placeholder={placeholder}
        disabled={disabled}
      />

      {isOpen && (
        <div className={styles.calendar}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <Button type="button" onMouseDown={(e) => e.stopPropagation()} variant="secondary" onClick={handlePrevMonth}>{"<"}</Button>
            <span>{currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}</span>
            <Button type="button" onMouseDown={(e) => e.stopPropagation()} variant="secondary" onClick={handleNextMonth}>{">"}</Button>
          </div>

          <div className={styles.calendarGrid}>
            {days.map(day => (
              <div
                key={day}
                className={`${styles.day} ${selectedDate === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split("T")[0] ? styles.selected : ""}`}
                onClick={() => handleSelectDate(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
